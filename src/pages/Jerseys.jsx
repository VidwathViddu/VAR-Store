import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { jerseys } from "../data/products";

function Jerseys({ handleAddToCart }) {
  // ==========================================
  // FILTER STATES
  // ==========================================

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [selectedPlayer, setSelectedPlayer] = useState("All");
  const [minimumRating, setMinimumRating] = useState("0");
  const [maximumPrice, setMaximumPrice] = useState("0");
  const [sortOption, setSortOption] = useState("featured");

  // ==========================================
  // LEAGUES
  // ==========================================

  const leagues = [
    "All",
    ...new Set(jerseys.map((product) => product.league)),
  ];

  // ==========================================
  // TEAMS
  // Changes based on selected league
  // ==========================================

  const teams = [
    "All",
    ...new Set(
      jerseys
        .filter(
          (product) =>
            selectedLeague === "All" ||
            product.league === selectedLeague
        )
        .map((product) => product.team)
    ),
  ];

  // ==========================================
  // PLAYERS
  // ==========================================

  const players = [
    "All",
    ...new Set(
      jerseys
        .map((product) => product.player)
        .filter(Boolean)
    ),
  ];

  // ==========================================
  // TYPES
  // ==========================================


  // ==========================================
  // FILTER PRODUCTS
  // ==========================================

  const filteredJerseys = jerseys
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLeague =
        selectedLeague === "All" ||
        product.league === selectedLeague;

      const matchesTeam =
        selectedTeam === "All" ||
        product.team === selectedTeam;

      const matchesPlayer =
        selectedPlayer === "All" ||
        product.player === selectedPlayer;


      const matchesRating =
        product.rating >= Number(minimumRating);

      const matchesPrice =
        maximumPrice === "0" ||
        product.price <= Number(maximumPrice);

      return (
        matchesSearch &&
        matchesLeague &&
        matchesTeam &&
        matchesPlayer &&
        matchesRating &&
        matchesPrice
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-low") {
        return a.price - b.price;
      }

      if (sortOption === "price-high") {
        return b.price - a.price;
      }

      if (sortOption === "rating-high") {
        return b.rating - a.rating;
      }

      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  // ==========================================
  // CLEAR FILTERS
  // ==========================================

  function clearFilters() {
    setSearchTerm("");
    setSelectedLeague("All");
    setSelectedTeam("All");
    setSelectedPlayer("All");
    setMinimumRating("0");
    setMaximumPrice("0");
    setSortOption("featured");
  }

  // ==========================================
  // FILTER STATUS
  // ==========================================

  const hasFilters =
    searchTerm !== "" ||
    selectedLeague !== "All" ||
    selectedTeam !== "All" ||
    selectedPlayer !== "All" ||    
    minimumRating !== "0" ||
    maximumPrice !== "0" ||
    sortOption !== "featured";

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="min-h-screen w-full px-6 py-10 text-white md:px-10">

      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <div className="mb-12 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Wear Your Passion
        </p>

        <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">
          Football Jerseys ⚽
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Discover premium jerseys inspired by the
          world's biggest football moments.
        </p>

      </div>

      {/* ==========================================
          FILTER PANEL
      ========================================== */}

      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl md:p-6">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* SEARCH */}

          <div className="lg:col-span-2">

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Search
            </label>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search jerseys, teams, players..."
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20"
            />

          </div>

          {/* LEAGUE */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              League
            </label>

            <select
              value={selectedLeague}
              onChange={(event) => {
                setSelectedLeague(event.target.value);
                setSelectedTeam("All");
              }}
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              {leagues.map((league) => (
                <option key={league} value={league}>
                  {league}
                </option>
              ))}

            </select>

          </div>

          {/* TEAM */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Team
            </label>

            <select
              value={selectedTeam}
              onChange={(event) =>
                setSelectedTeam(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}

            </select>

          </div>

          {/* PLAYER */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Player
            </label>

            <select
              value={selectedPlayer}
              onChange={(event) =>
                setSelectedPlayer(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              {players.map((player) => (
                <option key={player} value={player}>
                  {player === "All"
                    ? "All Players"
                    : player}
                </option>
              ))}

            </select>

          </div>

          {/* TYPE */}


          {/* RATING */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Minimum Rating
            </label>

            <select
              value={minimumRating}
              onChange={(event) =>
                setMinimumRating(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              <option value="0">
                All Ratings
              </option>

              <option value="4.5">
                4.5+ ⭐
              </option>

              <option value="4.7">
                4.7+ ⭐
              </option>

              <option value="4.8">
                4.8+ ⭐
              </option>

              <option value="4.9">
                4.9+ ⭐
              </option>

              <option value="5">
                5.0 ⭐
              </option>

            </select>

          </div>

          {/* MAX PRICE */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Maximum Price
            </label>

            <select
              value={maximumPrice}
              onChange={(event) =>
                setMaximumPrice(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              <option value="0">
                Any Price
              </option>

              <option value="4000">
                Under ₹4,000
              </option>

              <option value="5000">
                Under ₹5,000
              </option>

              <option value="6000">
                Under ₹6,000
              </option>

              <option value="7000">
                Under ₹7,000
              </option>

              <option value="10000">
                Under ₹10,000
              </option>

            </select>

          </div>

        </div>

        {/* ==========================================
            SORT + CLEAR
        ========================================== */}

        <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 md:flex-row md:items-end md:justify-between">

          <div className="w-full md:max-w-xs">

            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Sort By
            </label>

            <select
              value={sortOption}
              onChange={(event) =>
                setSortOption(event.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-5 py-3 text-white outline-none transition focus:border-emerald-400/50"
            >

              <option value="featured">
                Featured
              </option>

              <option value="price-low">
                Price: Low → High
              </option>

              <option value="price-high">
                Price: High → Low
              </option>

              <option value="rating-high">
                Rating: High → Low
              </option>

              <option value="name">
                Name: A → Z
              </option>

            </select>

          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="rounded-xl border border-red-400/30 bg-red-400/10 px-5 py-3 font-semibold text-red-300 transition hover:bg-red-400/20"
            >
              ✕ Clear Filters
            </button>
          )}

        </div>

      </div>

      {/* ==========================================
          RESULTS INFO
      ========================================== */}

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between">

        <p className="text-sm text-slate-400">

          Showing{" "}

          <span className="font-bold text-white">
            {filteredJerseys.length}
          </span>{" "}

          {filteredJerseys.length === 1
            ? "jersey"
            : "jerseys"}

        </p>

        {hasFilters && (
          <p className="text-sm text-emerald-400">
            Filters active
          </p>
        )}

      </div>

      {/* ==========================================
          PRODUCT GRID
      ========================================== */}

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        {filteredJerseys.length === 0 ? (

          <div className="col-span-full py-20 text-center">

            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-5 text-2xl font-black text-white">
                No jerseys found
              </h2>

              <p className="mt-3 text-slate-400">
                Try changing your search or filters
                to find more jerseys.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-emerald-300"
              >
                Clear Filters
              </button>

            </div>

          </div>

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