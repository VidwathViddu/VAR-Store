import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails({ handleAddToCart }) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

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

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

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

          <div className="mt-8 flex items-center justify-between border-y border-white/10 py-6">
            <div>
              <p className="text-sm text-slate-400">
                Price
              </p>

              <p className="mt-1 text-3xl font-black text-emerald-400">
                ₹{product.price}
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

          <p className="mt-8 leading-7 text-slate-400">
            Premium football gear designed for passionate fans.
            Show your love for the game with quality merchandise
            inspired by football's biggest teams and players.
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-8 w-full rounded-2xl bg-emerald-400 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
          >
            Add to Cart 🛒
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;