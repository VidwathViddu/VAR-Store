import ProductCard from "./ProductCard";
import { jerseys } from "../data/products";

function FeaturedProducts({ handleAddToCart }) {
  const featuredProducts = jerseys.slice(0, 3);

  return (
    <section
      id="featured-products"
      className="w-full py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Handpicked for you
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Featured Products
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Explore premium football merchandise selected for true fans.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/jerseys"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 font-semibold text-emerald-400 transition-all hover:scale-105 hover:bg-emerald-400 hover:text-slate-950"
          >
            View All Jerseys
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;