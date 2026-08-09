import ProductCard from "./ProductCard";
import { jerseys } from "../data/products";

function FeaturedProducts({ handleAddToCart }) {
  const featuredProducts = jerseys.slice(0, 3);

  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-4xl font-bold">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;