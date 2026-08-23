import { Link } from "react-router-dom";

function Cart({
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveFromCart,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-6 py-10 text-white md:px-10">

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="mb-12 text-center">

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

      {/* ==========================================
          EMPTY CART
      ========================================== */}

      {cart.length === 0 ? (

        <div className="mx-auto max-w-2xl py-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">

            <div className="text-6xl">
              🛒
            </div>

            <h2 className="mt-6 text-3xl font-black">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-4 max-w-md text-slate-400">
              Looks like you haven't added any football
              gear yet. Find something you love and
              bring it to your squad.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/jerseys"
                className="rounded-xl bg-emerald-400 px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-emerald-300"
              >
                Browse Jerseys ⚽
              </Link>

              <Link
                to="/boots"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Browse Boots 🥾
              </Link>

            </div>

          </div>

        </div>

      ) : (

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">

          {/* ========================================
              CART ITEMS
          ======================================== */}

          <div className="space-y-5">

            {/* ITEMS HEADER */}

            <div className="flex items-center justify-between">

              <p className="text-lg font-bold">
                Cart Items
              </p>

              <p className="text-sm text-slate-400">
                {totalItems}{" "}
                {totalItems === 1 ? "item" : "items"}
              </p>

            </div>

            {/* ITEMS */}

            {cart.map((item) => {

              const itemTotal =
                item.price * item.quantity;

              return (
                <div
                  key={`${item.id}-${item.size || "default"}`}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
                >

                  <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-6">

                    {/* PRODUCT IMAGE */}

                    <div className="h-48 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 sm:h-40 sm:w-40">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />

                    </div>

                    {/* PRODUCT INFO */}

                    <div className="flex min-w-0 flex-1 flex-col">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                            {item.category === "boot"
                              ? "Football Boots"
                              : "Football Jersey"}
                          </p>

                          <h2 className="mt-2 text-xl font-black md:text-2xl">
                            {item.name}
                          </h2>

                        </div>

                        {/* REMOVE */}

                        <button
                          onClick={() =>
                            handleRemoveFromCart(
                              item.id,
                              item.size
                            )
                          }
                          className="shrink-0 rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-500/20"
                        >
                          Remove
                        </button>

                      </div>

                      {/* SIZE */}

                      {item.size && (
                        <p className="mt-3 text-sm text-slate-400">

                          Size:{" "}

                          <span className="font-semibold text-white">
                            {item.size}
                          </span>

                        </p>
                      )}

                      {/* PRICE */}

                      <p className="mt-3 text-lg font-bold text-white">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* BOTTOM ROW */}

                      <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">

                        {/* QUANTITY */}

                        <div>

                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Quantity
                          </p>

                          <div className="flex w-fit items-center overflow-hidden rounded-xl border border-white/10 bg-slate-900/70">

                            <button
                              onClick={() =>
                                handleDecreaseQuantity(
                                  item.id,
                                  item.size
                                )
                              }
                              className="px-4 py-2 text-xl font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
                            >
                              −
                            </button>

                            <span className="min-w-12 border-x border-white/10 px-4 py-2 text-center font-bold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                handleIncreaseQuantity(
                                  item.id,
                                  item.size
                                )
                              }
                              className="px-4 py-2 text-xl font-bold text-slate-300 transition hover:bg-emerald-400/10 hover:text-emerald-400"
                            >
                              +
                            </button>

                          </div>

                        </div>

                        {/* ITEM TOTAL */}

                        <div className="sm:text-right">

                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Item Total
                          </p>

                          <p className="mt-1 text-xl font-black text-emerald-400">
                            ₹{itemTotal.toLocaleString()}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

            {/* CONTINUE SHOPPING */}

            <Link
              to="/jerseys"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* ========================================
              ORDER SUMMARY
          ======================================== */}

          <div className="lg:sticky lg:top-28 lg:self-start">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Order Summary
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Your Order
              </h2>

              {/* SUBTOTAL */}

              <div className="mt-8 flex justify-between text-slate-300">

                <span>
                  Subtotal
                </span>

                <span className="font-semibold text-white">
                  ₹{totalPrice.toLocaleString()}
                </span>

              </div>

              {/* SHIPPING */}

              <div className="mt-4 flex justify-between text-slate-300">

                <span>
                  Shipping
                </span>

                <span className="font-semibold text-emerald-400">
                  FREE
                </span>

              </div>

              {/* DELIVERY */}

              <div className="mt-4 flex justify-between text-slate-300">

                <span>
                  Estimated Delivery
                </span>

                <span className="text-right text-sm font-semibold text-white">
                  3–7 Business Days
                </span>

              </div>

              {/* DIVIDER */}

              <div className="my-6 border-t border-white/10" />

              {/* TOTAL */}

              <div className="flex items-center justify-between">

                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-2xl font-black text-emerald-400">
                  ₹{totalPrice.toLocaleString()}
                </span>

              </div>

              {/* CHECKOUT */}

              <Link
                to="/checkout"
                className="mt-7 block w-full rounded-2xl bg-emerald-400 py-4 text-center font-black text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
              >
                Proceed to Checkout →
              </Link>

              {/* TRUST */}

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <span className="text-xl">
                    🔒
                  </span>

                  <div>

                    <p className="text-sm font-bold text-white">
                      Secure Checkout
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Your order information is handled securely.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;