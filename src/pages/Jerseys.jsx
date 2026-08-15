import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { jerseys } from "../data/products";


function Jerseys({ handleAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minimumRating, setMinimumRating] = useState("0");
  const filteredJerseys = jerseys.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.rating >= Number(minimumRating)
  );
  return (
    <div className="min-h-screen w-full px-10 py-10 text-white">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Wear Your Passion
        </p>

        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Football Jerseys ⚽
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Discover premium jerseys inspired by the world's biggest football moments.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search jerseys..."
          className="w-full rounded-xl bg-slate-800 px-5 py-3 text-white outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="mx-auto mt-4 max-w-md">
        <select
          value={minimumRating}
          onChange={(event) => setMinimumRating(event.target.value)}
          className="w-full rounded-xl bg-slate-800 px-5 py-3 text-white outline-none"
        >
          <option value="0">All Ratings</option>
          <option value="4.5">4.5+ ⭐</option>
          <option value="4.7">4.7+ ⭐</option>
          <option value="4.8">4.8+ ⭐</option>
        </select>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredJerseys.length === 0 ? (
          <p className="col-span-full text-center text-xl text-slate-400">
            🔍 No jerseys found.
          </p>
        ) : (
          filteredJerseys.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Jerseys;