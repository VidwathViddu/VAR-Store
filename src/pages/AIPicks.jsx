import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function AIPicks({ handleAddToCart }) {
  const [budget, setBudget] = useState("");
  const [minimumRating, setMinimumRating] = useState("0");
  const [category, setCategory] = useState("all");
  const [recommendations, setRecommendations] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [recommendationMessage, setRecommendationMessage] = useState("");

  function handleRecommend() {
    const filteredProducts = products.filter(
      (product) =>
        (budget === "" || product.price <= Number(budget)) &&
        product.rating >= Number(minimumRating) &&
        (category === "all" || product.category === category)
    );

    const sortedProducts = [...filteredProducts].sort(
      (a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }

        return a.price - b.price;
      }
    );
    let message = "🤖 Here are the best matches for you";

    if (budget !== "") {
      message += ` under ₹${budget}`;
    }

    if (category !== "all") {
      message += ` in the ${category} category`;
    }

    if (minimumRating !== "0") {
      message += ` with a rating of ${minimumRating}+`;
    }

    message += ".";

    setRecommendations(sortedProducts);
    setRecommendationMessage(message);
    setHasSearched(true);
  }

  return (
    <div className="min-h-screen w-full px-10 py-10 text-white">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Smart Shopping
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          AI Picks 🤖
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Tell us your preferences and discover the football gear that suits you best.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        <label className="mb-2 block text-sm text-slate-300">
          Maximum Budget
        </label>

        <input
          type="number"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          placeholder="Enter your maximum budget"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
        />

        <label className="mb-2 mt-6 block text-sm text-slate-300">
          Minimum Rating
        </label>

        <select
          value={minimumRating}
          onChange={(event) => setMinimumRating(event.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
        >
          <option className="bg-slate-900 text-white" value="0">Any Rating</option>
          <option className="bg-slate-900 text-white" value="4.5">4.5+ ⭐</option>
          <option className="bg-slate-900 text-white" value="4.7">4.7+ ⭐</option>
          <option className="bg-slate-900 text-white" value="4.8">4.8+ ⭐</option>
        </select>

          <label className="mb-2 mt-6 block text-sm text-slate-300">
            Product Category
          </label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
          >
            <option className="bg-slate-900 text-white" value="all">All Products</option>
            <option className="bg-slate-900 text-white" value="jersey">Jerseys 👕</option>
            <option className="bg-slate-900 text-white" value="boot">Boots 🥾</option>
        </select>
        <button
          onClick={handleRecommend}
          className="mt-8 w-full rounded-xl bg-emerald-400 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
        >
          Get AI Picks 🤖
        </button>
      </div>

      {hasSearched && (
        recommendations.length === 0 ? (
          <p className="mt-12 text-center text-xl text-slate-400">
            🤖 No matching products found. Try changing your preferences.
          </p>
        ) : (
          <div className="mx-auto mt-12 max-w-7xl">
            <h2 className="mb-3 text-center text-3xl font-black md:text-4xl">
              Recommended for You ✨
            </h2>
            <p className="mb-2 text-center text-sm text-emerald-400">
              {recommendations.length} matches found
            </p>
            <p className="mb-8 text-center text-slate-400">
              {recommendationMessage}
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AIPicks;