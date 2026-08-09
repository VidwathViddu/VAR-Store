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
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-xl rounded-2xl bg-slate-800 p-10 text-center">

        <div className="text-6xl">
          ✅
        </div>

        <h1 className="mt-6 text-4xl font-bold">
          Order Placed!
        </h1>

        <p className="mt-4 text-slate-300">
          Thank you{ name ? `, ${name}` : ""} for shopping with VAR Store.
        </p>

        <div className="mt-8 space-y-4 rounded-xl bg-slate-700 p-6 text-left">

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
          className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-400"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;