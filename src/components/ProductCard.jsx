import { Link } from "react-router-dom";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-white shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-emerald-500/10">

      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <Link
            to={`/product/${product.id}`}
            className="text-xl font-bold transition hover:text-emerald-400"
          >
            {product.name}
          </Link>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
            ⭐ {product.rating}
          </span>
        </div>

        <p className="mt-4 text-2xl font-bold text-emerald-400">
          ₹{product.price}
        </p>

        <button
          onClick={() => handleAddToCart(product)}
          className="mt-6 w-full rounded-xl bg-emerald-400 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-300 hover:shadow-emerald-400/30 active:scale-95"
        >
          Add to Cart 🛒
        </button>
      </div>

    </div>
  );
}

export default ProductCard;