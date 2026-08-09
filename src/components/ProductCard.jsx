import { Link } from "react-router-dom";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-slate-800 text-white shadow-lg">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>

      <div className="p-6">
        <Link
          to={`/product/${product.id}`}
          className="text-2xl font-bold hover:text-emerald-400"
        >
          {product.name}
        </Link>

        <p className="mt-3 text-slate-300">
          ₹{product.price}
        </p>

        <p className="mt-2">
          ⭐ {product.rating}
        </p>

        <button
          onClick={() => handleAddToCart(product)}
          className="mt-6 w-full rounded-xl bg-emerald-500 py-3 font-semibold hover:bg-emerald-600"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;