import { useParams } from "react-router-dom";
import { jerseys } from "../data/products";

function ProductDetails({ handleAddToCart }) {
  const { id } = useParams();

  const product = jerseys.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-10 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

        <div className="overflow-hidden rounded-2xl bg-slate-800">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-150 w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-emerald-400">
            Football Jersey
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            {product.name}
          </h1>

          <p className="mt-6 text-3xl font-bold">
            ₹{product.price}
          </p>

          <p className="mt-4 text-xl">
            ⭐ {product.rating}
          </p>

          <p className="mt-6 leading-7 text-slate-400">
            Premium quality football jersey designed for
            passionate football fans. Show your support
            for your favourite team and player.
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-8 rounded-xl bg-emerald-500 py-4 font-bold text-slate-950 hover:bg-emerald-400"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;