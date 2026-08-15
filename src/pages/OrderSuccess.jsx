import { useLocation, Link } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const {
    orderId,
    totalPrice,
    payment,
    name,
  } = location.state || {};

  return (
    <div className="min-h-screen px-6 py-20 text-white">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-5xl shadow-lg shadow-emerald-500/10">
          ✅
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Order Placed!
        </h1>

        <p className="mt-4 text-slate-300">
          Thank you{ name ? `, ${name}` : ""} for shopping with VAR Store.
        </p>

        <div className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-black/10 p-6 text-left">

          <div className="flex justify-between">
            <span className="text-slate-300">
              Order ID
            </span>

            <span className="font-semibold">
              #{orderId}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              Total
            </span>

            <span className="font-bold text-emerald-400">
              ₹{totalPrice}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-300">
              Payment
            </span>

            <span>
              {payment}
            </span>
          </div>

        </div>

        <p className="mt-6 text-slate-400">
          We'll process your order shortly.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-emerald-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-300 active:scale-95"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;