import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { Buffer } from "node:buffer";
import { Client, handle_file } from "@gradio/client";

dotenv.config();

const app = express();
const port = 5000;

// =====================================================
// GEMINI AI
// =====================================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());
app.use(express.json({ limit: "15mb" }));

// =====================================================
// SERVER TEST
// =====================================================

app.get("/", (req, res) => {
  res.send("VAR Store Gemini AI Server is running! 🤖");
});

// =====================================================
// AI MANAGER
// =====================================================

app.post("/api/manager", async (req, res) => {
  try {
    const { message, products } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Please provide a message.",
      });
    }

    const productCatalog = products
      .map(
        (product) =>
          `ID: ${product.id} | ${product.name} | Category: ${product.category} | Price: ₹${product.price} | Rating: ${product.rating}`
      )
      .join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",

      contents: message,

      config: {
        systemInstruction: `
You are VAR Manager, a friendly and enthusiastic AI shopping assistant
for VAR Store, a premium football merchandise store.

You help users choose products from the ACTUAL VAR Store catalog below.

ACTUAL PRODUCT CATALOG:
${productCatalog}

STRICT RULES:
- Recommend ONLY products from the catalog above.
- Never invent products, prices, ratings, stock availability, sizes, colours, or discounts.
- When recommending a product, mention its exact name and price.
- Use ratings when helpful.
- If the requested product does not exist in the catalog, clearly say it is not currently available.
- You may suggest the closest available alternative from the catalog.
- Be conversational, helpful, and concise.
- Keep answers under 120 words.
`,
      },
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini AI Error:", error);

    res.status(500).json({
      error:
        error.message ||
        "Something went wrong with the AI Manager.",
    });
  }
});

// =====================================================
// AI TRY-ON
// IDM-VTON
// =====================================================

app.post("/api/try-on", async (req, res) => {
  try {
    const { userImage, jerseyImageUrl } = req.body;

    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (!userImage || !jerseyImageUrl) {
      return res.status(400).json({
        error:
          "Both your photo and the jersey image are required.",
      });
    }

    // -------------------------------------------------
    // USER IMAGE
    // -------------------------------------------------

    console.log("Preparing user image...");

    const userImageMatch = userImage.match(
      /^data:(.*?);base64,(.*)$/
    );

    if (!userImageMatch) {
      return res.status(400).json({
        error: "Invalid user image format.",
      });
    }

    const userBase64 = userImageMatch[2];

    const userBuffer = Buffer.from(
      userBase64,
      "base64"
    );

    const userFile = handle_file(userBuffer);

    console.log("User image prepared.");

    // -------------------------------------------------
    // JERSEY IMAGE
    // -------------------------------------------------

    console.log("Downloading jersey image...");

    const jerseyResponse = await fetch(
      jerseyImageUrl
    );

    if (!jerseyResponse.ok) {
      throw new Error(
        `Could not download jersey image. Status: ${jerseyResponse.status}`
      );
    }

    const jerseyBuffer = Buffer.from(
      await jerseyResponse.arrayBuffer()
    );

    const jerseyFile = handle_file(jerseyBuffer);

    console.log(
      "Jersey image downloaded successfully."
    );

    // -------------------------------------------------
    // CONNECT TO IDM-VTON
    // -------------------------------------------------

    console.log("Connecting to IDM-VTON...");

    const client = await Client.connect(
  "yisol/IDM-VTON",
  {
    hf_token: process.env.HF_TOKEN,
  }
);

    console.log("Connected to IDM-VTON.");

    // -------------------------------------------------
    // RUN TRY-ON
    // -------------------------------------------------

    console.log("Sending images to IDM-VTON...");

    const result = await client.predict(
      "/tryon",
      {
        dict: {
          background: userFile,
          layers: [],
          composite: null,
        },

        garm_img: jerseyFile,

        garment_des:
          "A football jersey from VAR Store",

        is_checked: true,

        is_checked_crop: false,

        denoise_steps: 30,

        seed: 42,
      }
    );

    console.log(
      "IDM-VTON response received."
    );

    // -------------------------------------------------
    // READ GENERATED IMAGE
    // -------------------------------------------------

    const generatedImage =
      result?.data?.[0];

    if (!generatedImage) {
      console.error(
        "IDM-VTON returned no generated image:",
        result
      );

      return res.status(500).json({
        error:
          "IDM-VTON did not return a generated image.",
      });
    }

    console.log(
      "Generated image data:",
      generatedImage
    );

    // -------------------------------------------------
    // GET IMAGE URL
    // -------------------------------------------------

    let generatedImageUrl = null;

    if (typeof generatedImage === "string") {
      generatedImageUrl = generatedImage;
    } else if (generatedImage.url) {
      generatedImageUrl = generatedImage.url;
    } else if (generatedImage.path) {
      generatedImageUrl = generatedImage.path;
    }

    if (!generatedImageUrl) {
      console.error(
        "Could not find generated image URL:",
        generatedImage
      );

      return res.status(500).json({
        error:
          "Could not read the generated try-on image.",
      });
    }

    // -------------------------------------------------
    // DOWNLOAD GENERATED IMAGE
    // -------------------------------------------------

    console.log(
      "Downloading generated try-on image..."
    );

    const outputResponse = await fetch(
      generatedImageUrl
    );

    if (!outputResponse.ok) {
      throw new Error(
        `Could not download generated image. Status: ${outputResponse.status}`
      );
    }

    const outputBuffer = Buffer.from(
      await outputResponse.arrayBuffer()
    );

    const outputMimeType =
      outputResponse.headers.get(
        "content-type"
      ) || "image/png";

    const outputBase64 =
      outputBuffer.toString("base64");

    // -------------------------------------------------
    // SEND RESULT TO REACT
    // -------------------------------------------------

    console.log(
      "Try-On image generated successfully! 👕🔥"
    );

    res.json({
      image: `data:${outputMimeType};base64,${outputBase64}`,
    });
    } catch (error) {
    console.error(
      "IDM-VTON Try-On Error:",
      error
    );

    let userFriendlyError =
      "Something went wrong while generating your try-on. Please try again.";

    const errorMessage =
      error.message?.toLowerCase() || "";

    // Hugging Face / ZeroGPU quota
    if (
      errorMessage.includes("zerogpu quota") ||
      errorMessage.includes("quota") ||
      errorMessage.includes("try again in")
    ) {
      userFriendlyError =
        "Our AI Try-On service is currently busy. Please try again later. ✨";
    }

    // Service temporarily unavailable
    else if (
      errorMessage.includes("503") ||
      errorMessage.includes("unavailable") ||
      errorMessage.includes("high demand")
    ) {
      userFriendlyError =
        "The AI service is experiencing high demand right now. Please try again in a few minutes. 🤖";
    }

    // Connection issue
    else if (
      errorMessage.includes("fetch failed") ||
      errorMessage.includes("network")
    ) {
      userFriendlyError =
        "Unable to connect to the AI Try-On service. Please check your connection and try again.";
    }

    // Jersey image issue
    else if (
      errorMessage.includes("could not download jersey image")
    ) {
      userFriendlyError =
        "We couldn't prepare this jersey for AI Try-On. Please try another product.";
    }

    res.status(500).json({
      error: userFriendlyError,
    });
  }

// =====================================================
// START SERVER
// =====================================================

app.listen(port, () => {
  console.log(
    `VAR Store Gemini AI Server running on http://localhost:${port}`
  );
});