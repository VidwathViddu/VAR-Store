import ProductCard from "../components/ProductCard";
import { jerseys } from "../data/products";

function Jerseys({ handleAddToCart }) {
  return (
    <div className="min-h-screen w-full bg-slate-950 px-10 py-10 text-white">
      <h1 className="text-center text-4xl font-bold">
        Football Jerseys ⚽
      </h1>

      <p className="mt-3 text-center text-slate-400">
        Premium jerseys for football fans
      </p>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jerseys.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Jerseys;