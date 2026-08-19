import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = 5000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("VAR Store Gemini AI Server is running! 🤖");
});

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
      error: error.message || "Something went wrong with the AI Manager.",
    });
  }
});

app.listen(port, () => {
  console.log(
    `VAR Store Gemini AI Server running on http://localhost:${port}`
  );
});