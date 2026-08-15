import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white transition hover:text-emerald-400"
        >
          VAR Store <span className="text-emerald-400">⚽</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 text-sm font-medium text-slate-300 md:gap-8 md:text-base">
          <Link
            to="/"
            className="transition hover:text-emerald-400"
          >
            Home
          </Link>

          <Link
            to="/jerseys"
            className="transition hover:text-emerald-400"
          >
            Jerseys
          </Link>

          <Link
            to="/boots"
            className="transition hover:text-emerald-400"
          >
            Boots
          </Link>

          <Link
            to="/aipicks"
            className="transition hover:text-emerald-400"
          >
            AI Picks 🤖
          </Link>

          <Link
            to="/cart"
            className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-white transition hover:bg-emerald-400/20"
          >
            🛒 <span className="font-semibold">{cartCount}</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;