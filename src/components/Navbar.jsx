import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, handleRestartTutorial }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  // ==========================================
  // MOBILE TUTORIAL MENU CONTROL
  // ==========================================

  useEffect(() => {
    function handleTutorialMenu(event) {
      const shouldOpen = event.detail?.open;

      setMenuOpen(shouldOpen);
    }

    window.addEventListener(
      "var-mobile-tour-menu",
      handleTutorialMenu
    );

    return () => {
      window.removeEventListener(
        "var-mobile-tour-menu",
        handleTutorialMenu
      );
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 px-4 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* ==========================================
            TOP BAR
        ========================================== */}

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-white transition hover:text-emerald-400 sm:text-2xl"
          >
            VAR Store{" "}
            <span className="text-emerald-400">
              ⚽
            </span>
          </Link>

          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex lg:gap-8 lg:text-base">

            <Link
              to="/"
              id="tour-home"
              className="transition hover:text-emerald-400"
            >
              Home
            </Link>

            <Link
              to="/jerseys"
              id="tour-jerseys"
              className="transition hover:text-emerald-400"
            >
              Jerseys
            </Link>

            <Link
              to="/boots"
              id="tour-boots"
              className="transition hover:text-emerald-400"
            >
              Boots
            </Link>

            <Link
              to="/aipicks"
              id="tour-ai-picks"
              className="transition hover:text-emerald-400"
            >
              AI Picks 🤖
            </Link>

            {/* TOUR */}

            <button
              onClick={handleRestartTutorial}
              className="rounded-xl border border-purple-400/30 bg-purple-400/10 px-3 py-2 text-purple-300 transition hover:bg-purple-400/20 hover:text-purple-200"
              title="Take the VAR Store tour again"
            >
              🧭 Tour
            </button>

            {/* CART */}

            <Link
              id="tour-cart"
              to="/cart"
              className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-white transition hover:bg-emerald-400/20"
            >
              🛒{" "}
              <span className="font-semibold">
                {cartCount}
              </span>
            </Link>

          </div>

          {/* ==========================================
              MOBILE CONTROLS
          ========================================== */}

          <div className="flex items-center gap-2 md:hidden">

            {/* MOBILE CART */}

            <Link
              id="mobile-tour-cart"
              to="/cart"
              onClick={closeMenu}
              className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-white transition hover:bg-emerald-400/20"
            >
              🛒{" "}
              <span className="font-semibold">
                {cartCount}
              </span>
            </Link>

            {/* MENU BUTTON */}

            <button
              onClick={() =>
                setMenuOpen((previous) => !previous)
              }
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xl text-white transition hover:bg-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>

        {/* ==========================================
            MOBILE MENU
        ========================================== */}

        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl md:hidden">

            <div className="flex flex-col gap-1">

              <Link
                to="/"
                id="mobile-tour-home"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                🏠 Home
              </Link>

              <Link
                to="/jerseys"
                id="mobile-tour-jerseys"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                👕 Jerseys
              </Link>

              <Link
                to="/boots"
                id="mobile-tour-boots"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                🥾 Boots
              </Link>

              <Link
                to="/aipicks"
                id="mobile-tour-ai-picks"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                🤖 AI Picks
              </Link>

              <button
                onClick={() => {
                  closeMenu();
                  handleRestartTutorial();
                }}
                className="rounded-xl px-4 py-3 text-left font-medium text-purple-300 transition hover:bg-purple-400/10 hover:text-purple-200"
              >
                🧭 Take Store Tour
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;