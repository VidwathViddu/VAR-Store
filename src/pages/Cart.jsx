import { Link } from "react-router-dom";

function Cart({
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveFromCart,
}) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-10 py-10 text-white">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Ready To Play
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Your Cart 🛒
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Review your football gear before heading to checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <p className="mt-6 text-center text-slate-400">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-8 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size || "default"}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
            >
              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              {/* Selected Size */}
              {item.size && (
                <p className="mt-2 text-sm text-slate-400">
                  Size:{" "}
                  <span className="font-semibold text-white">
                    {item.size}
                  </span>
                </p>
              )}

              <p className="mt-2 text-slate-300">
                ₹{item.price.toLocaleString()}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() =>
                    handleDecreaseQuantity(item.id, item.size)
                  }
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-bold transition hover:bg-white/10"
                >
                  −
                </button>

                <span className="text-lg font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    handleIncreaseQuantity(item.id, item.size)
                  }
                  className="rounded-lg bg-emerald-400 px-4 py-2 font-bold text-slate-950 transition hover:scale-105 hover:bg-emerald-300"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    handleRemoveFromCart(item.id, item.size)
                  }
                  className="ml-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-2 font-semibold text-red-300 transition hover:bg-red-500/20"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
            <div className="flex justify-between text-slate-300">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="mt-3 flex justify-between text-slate-300">
              <span>Shipping</span>
              <span className="text-emerald-400">FREE</span>
            </div>

            <div className="mt-4 border-t border-slate-700 pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-emerald-400">
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-6 block w-full rounded-xl bg-emerald-400 py-4 text-center font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;