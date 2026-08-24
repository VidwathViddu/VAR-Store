import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails({ handleAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ==========================================
  // AI TRY-ON STATES
  // ==========================================

  const [userImage, setUserImage] = useState(null);
  const [userImagePreview, setUserImagePreview] = useState("");
  const [tryOnImage, setTryOnImage] = useState("");
  const [isTryingOn, setIsTryingOn] = useState(false);
  const [tryOnError, setTryOnError] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="text-3xl font-black">
            Product not found 😕
          </h1>

          <p className="mt-4 text-slate-400">
            This product doesn't exist or may have been removed.
          </p>
        </div>
      </div>
    );
  }

  const sizes =
    product.category === "jersey"
      ? ["S", "M", "L", "XL"]
      : ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];

  // ==========================================
  // ADD TO CART
  // ==========================================

  function handleAddProductToCart() {
    if (!selectedSize) {
      return;
    }

    handleAddToCart({
      ...product,
      size: selectedSize,
      quantity,
    });
  }

  // ==========================================
  // AI TRY-ON
  // ==========================================

  function handleImageSelect(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setTryOnError("Please select a valid image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setTryOnError(
        "Please choose an image smaller than 10MB."
      );
      return;
    }

    setTryOnError("");
    setTryOnImage("");

    setUserImage(file);

    const previewUrl = URL.createObjectURL(file);
    setUserImagePreview(previewUrl);
  }

  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = () => {
        reject(
          new Error("Could not read the image.")
        );
      };

      reader.readAsDataURL(file);
    });
  }

  async function handleTryOn() {
    if (!userImage) {
      setTryOnError(
        "Please upload a photo first."
      );
      return;
    }

    setTryOnError("");
    setTryOnImage("");
    setIsTryingOn(true);

    try {
      const userImageBase64 =
        await convertFileToBase64(userImage);

      const response = await fetch(
        "https://var-store.onrender.com/api/try-on",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            userImage: userImageBase64,
            jerseyImageUrl: product.image,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Try-On generation failed."
        );
      }

      if (!data.image) {
        throw new Error(
          "No generated image was returned."
        );
      }

      setTryOnImage(data.image);
    } catch (error) {
      console.error(
        "AI Try-On Error:",
        error
      );

      setTryOnError(
        error.message ||
          "Something went wrong while creating your try-on."
      );
    } finally {
      setIsTryingOn(false);
    }
  }

  function handleRemovePhoto() {
    setUserImage(null);
    setUserImagePreview("");
    setTryOnImage("");
    setTryOnError("");
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">

        {/* ======================================
            PRODUCT IMAGE
        ====================================== */}

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-150 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* ======================================
            PRODUCT DETAILS
        ====================================== */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10">

          {/* Category */}

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {product.category === "boot"
              ? "Football Boots"
              : "Football Jersey"}
          </p>

          {/* Product Name */}

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            {product.name}
          </h1>

          {/* Price + Rating */}

          <div className="mt-8 flex items-center justify-between border-y border-white/10 py-6">

            <div>
              <p className="text-sm text-slate-400">
                Price
              </p>

              <p className="mt-1 text-3xl font-black text-emerald-400">
                ₹{product.price.toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-400">
                Rating
              </p>

              <p className="mt-1 text-xl font-bold">
                ⭐ {product.rating}
              </p>
            </div>

          </div>

          {/* Description */}

          <p className="mt-8 leading-7 text-slate-400">
            {product.description ||
              "Premium football gear designed for passionate fans."}
          </p>

          {/* ======================================
              SIZE SELECTION
          ====================================== */}

          <div className="mt-8">

            <div className="flex items-center justify-between">

              <h3 className="font-bold text-white">
                {product.category === "boot"
                  ? "Select Boot Size"
                  : "Select Jersey Size"}
              </h3>

              {selectedSize && (
                <span className="text-sm text-emerald-400">
                  Selected: {selectedSize}
                </span>
              )}

            </div>

            <div className="mt-4 flex flex-wrap gap-3">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    setSelectedSize(size)
                  }
                  className={`min-w-12 rounded-xl border px-4 py-3 font-bold transition-all ${
                    selectedSize === size
                      ? "border-emerald-400 bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20"
                      : "border-white/10 bg-slate-900/50 text-white hover:border-emerald-400/50"
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>

            {!selectedSize && (
              <p className="mt-3 text-sm text-amber-300">
                Please select a size before adding to cart.
              </p>
            )}

          </div>

          {/* ======================================
              QUANTITY
          ====================================== */}

          <div className="mt-8">

            <h3 className="font-bold text-white">
              Quantity
            </h3>

            <div className="mt-4 flex w-fit items-center overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">

              <button
                onClick={() =>
                  setQuantity(
                    (previousQuantity) =>
                      Math.max(
                        1,
                        previousQuantity - 1
                      )
                  )
                }
                className="px-5 py-3 text-xl font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                −
              </button>

              <span className="min-w-14 border-x border-white/10 px-5 py-3 text-center font-bold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(
                    (previousQuantity) =>
                      previousQuantity + 1
                  )
                }
                className="px-5 py-3 text-xl font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                +
              </button>

            </div>

          </div>

          {/* ======================================
              ADD TO CART
          ====================================== */}

          <button
            onClick={handleAddProductToCart}
            className={`mt-8 w-full rounded-2xl py-4 font-bold transition-all active:scale-[0.98] ${
              selectedSize
                ? "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] hover:bg-emerald-300"
                : "cursor-not-allowed bg-slate-700 text-slate-400"
            }`}
          >
            {selectedSize
              ? `Add ${
                  quantity > 1
                    ? `${quantity} Items`
                    : "to Cart"
                } 🛒`
              : "Select a Size First"}
          </button>

{/* ======================================
    AI TRY-ON
====================================== */}

{product.category === "jersey" && (
  <div className="mt-6 rounded-3xl border border-purple-400/20 bg-purple-400/5 p-5">

    {/* ==================================
        HEADER
    ================================== */}

    <div>
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-300">
          AI
        </span>

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
          Powered by IDM-VTON
        </p>
      </div>

      <h2 className="mt-3 text-2xl font-black text-white">
        ✨ AI Try-On
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        Upload a photo of yourself and see how this jersey could look on you.
      </p>
    </div>

    {/* ==================================
        UPLOAD
    ================================== */}

    {!userImagePreview && (
      <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-purple-400/40 bg-purple-400/5 px-6 py-8 text-center transition hover:border-purple-300/70 hover:bg-purple-400/10">

        <span className="text-3xl">
          📸
        </span>

        <span className="mt-3 font-bold text-white">
          Upload Your Photo
        </span>

        <span className="mt-1 text-xs text-slate-500">
          JPG, PNG or WEBP • Max 10MB
        </span>

        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          onChange={handleImageSelect}
          className="hidden"
        />

      </label>
    )}

    {/* ==================================
        PHOTO PREVIEW
    ================================== */}

    {userImagePreview && !tryOnImage && (
      <div className="mt-5">

        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">

          <img
            src={userImagePreview}
            alt="Your uploaded photo"
            className="h-full w-full object-contain"
          />

        </div>

        <div className="mt-4 flex gap-3">

          <button
            onClick={handleTryOn}
            disabled={isTryingOn}
            className="flex-1 rounded-xl bg-purple-400 py-3 font-bold text-slate-950 transition hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isTryingOn
              ? "Creating Your Look..."
              : "✨ Try It On"}
          </button>

          <button
            onClick={handleRemovePhoto}
            disabled={isTryingOn}
            className="rounded-xl border border-white/10 bg-white/5 px-4 font-semibold text-slate-300 transition hover:bg-white/10 disabled:opacity-50"
          >
            Change
          </button>

        </div>

      </div>
    )}

    {/* ==================================
        LOADING
    ================================== */}

    {isTryingOn && (
      <div className="mt-5 rounded-2xl border border-purple-400/20 bg-purple-400/5 p-6 text-center">

        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-purple-400/20 border-t-purple-400" />

        <p className="mt-4 font-bold text-white">
          IDM-VTON is creating your look... ✨
        </p>

        <p className="mt-2 text-sm text-slate-400">
          This may take a little while.
        </p>

      </div>
    )}

    {/* ==================================
        RESULT
    ================================== */}

    {tryOnImage && !isTryingOn && (
      <div className="mt-5">

        <div className="mb-4">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
            Your AI Look
          </p>

          <h3 className="mt-1 text-xl font-black text-white">
            {product.name}
          </h3>

        </div>

        {/* FIXED RESULT FRAME */}

        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-purple-400/30 bg-white shadow-lg shadow-purple-500/10">

          <img
            src={tryOnImage}
            alt={`AI try-on of ${product.name}`}
            className="h-full w-full object-contain"
          />

        </div>

        {/* ATTRIBUTION */}

        <p className="mt-3 text-center text-xs text-slate-500">
          ✨ Virtual try-on powered by IDM-VTON
        </p>

        {/* ACTIONS */}

        <div className="mt-4 flex gap-3">

          <label className="flex-1 cursor-pointer rounded-xl border border-white/10 bg-white/5 py-3 text-center font-semibold text-slate-300 transition hover:bg-white/10">

            📸 Try Another Photo

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageSelect}
              className="hidden"
            />

          </label>

          <button
            onClick={() => {
              setTryOnImage("");
              setTryOnError("");
            }}
            className="rounded-xl border border-purple-400/30 bg-purple-400/10 px-4 font-semibold text-purple-300 transition hover:bg-purple-400/20"
          >
            Try Again
          </button>

        </div>

      </div>
    )}

    {/* ==================================
        ERROR
    ================================== */}

    {tryOnError && (
      <div className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
        ⚠️ {tryOnError}
      </div>
    )}

  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;