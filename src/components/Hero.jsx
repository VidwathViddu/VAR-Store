function Hero(props) {
  function handleExplore() {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <section className="relative flex w-full min-h-[65vh] flex-col items-center justify-center overflow-hidden px-6 text-center text-white">
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative z-10">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Football • Style • Passion
        </p>

        <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
          {props.title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
          {props.subtitle}
        </p>

        <button
          onClick={handleExplore}
          className="mt-8 rounded-2xl bg-emerald-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-300 hover:shadow-emerald-400/30 active:scale-95"
        >
          Explore Store ⚽
        </button>
      </div>
    </section>
  );
}

export default Hero;