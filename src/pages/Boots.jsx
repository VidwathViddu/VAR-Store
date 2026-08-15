import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { boots } from "../data/products";

function Boots({ handleAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
const [minimumRating, setMinimumRating] = useState("0");
const filteredBoots = boots.filter(
  (product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.rating >= Number(minimumRating)
);
  return (
    <div className="min-h-screen w-full px-10 py-10 text-white">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Built For The Game
        </p>

        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Football Boots 🥾
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Discover elite football boots designed for speed, control, and confidence.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search boots..."
          className="w-full rounded-xl bg-slate-800 px-5 py-3 text-white outline-none placeholder:text-slate-400"
        />

        <select
          value={minimumRating}
          onChange={(event) => setMinimumRating(event.target.value)}
          className="mt-4 w-full rounded-xl bg-slate-800 px-5 py-3 text-white outline-none"
        >
          <option value="0">All Ratings</option>
          <option value="4.5">4.5+ ⭐</option>
          <option value="4.7">4.7+ ⭐</option>
          <option value="4.8">4.8+ ⭐</option>
        </select>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBoots.length === 0 ? (
          <p className="col-span-full text-center text-xl text-slate-400">
            🔍 No boots found.
          </p>
        ) : (
          filteredBoots.map((product) => (
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

export default Boots;