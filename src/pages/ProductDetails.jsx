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

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">

        {/* Product Image */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-150 w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {product.category === "boot"
              ? "Football Boots"
              : "Football Jersey"}
          </p>

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

          {/* Size Selection */}
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
                  onClick={() => setSelectedSize(size)}
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

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="font-bold text-white">
              Quantity
            </h3>

            <div className="mt-4 flex w-fit items-center overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">
              <button
                onClick={() =>
                  setQuantity((previousQuantity) =>
                    Math.max(1, previousQuantity - 1)
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

          {/* Add to Cart */}
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
                  quantity > 1 ? `${quantity} Items` : "to Cart"
                } 🛒`
              : "Select a Size First"}
          </button>

          {/* AI Try-On - Jerseys only */}
          {product.category === "jersey" && (
            <button
              className="mt-4 w-full rounded-2xl border border-purple-400/40 bg-purple-400/10 py-4 font-bold text-purple-300 transition-all hover:scale-[1.02] hover:bg-purple-400/20 active:scale-[0.98]"
            >
              ✨ AI Try This Jersey On
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;