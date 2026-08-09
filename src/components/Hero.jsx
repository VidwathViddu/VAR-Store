function Hero(props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold">{props.title}</h1>

      <p className="mt-4 text-xl text-slate-300">
        {props.subtitle}
      </p>

      <button className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold hover:bg-emerald-600">
        Explore Store
      </button>
    </div>
  );
}

export default Hero;