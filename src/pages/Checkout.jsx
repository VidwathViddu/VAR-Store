import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart}) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    payment: "Cash on Delivery",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  function handlePlaceOrder() {
    if (
    customer.name.trim() === "" ||
    customer.email.trim() === "" ||
    customer.address.trim() === ""
  ) {
    setError("Please fill in all delivery details.");
    return;
  }

  setError("");
    const orderId =
        "VAR-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    setCart([]);

    navigate("/order-success", {
        state: {
        orderId,
        totalPrice,
        payment: customer.payment,
        name: customer.name,
    },
  });
}
  function handleChange(event) {
  const { name, value } = event.target;

  setCustomer((prevCustomer) => ({
    ...prevCustomer,
    [name]: value,
  }));
}
  return (
    <div className="min-h-screen px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Almost There
          </p>

          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Checkout 💳
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Complete your details and get your football gear on its way.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {/* Customer Details */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-lg">
            <h2 className="text-2xl font-bold">
              Delivery Details
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                    type="text"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Address
                </label>

                <textarea
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                    placeholder="Enter your delivery address"
                    rows="4"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Payment Method
                </label>

                <select
                    name="payment"
                    value={customer.payment}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-400/50 focus:bg-white/10"
                    >
                    <option className="bg-slate-900 text-white">
                      Cash on Delivery
                    </option>

                    <option className="bg-slate-900 text-white">
                      UPI
                    </option>

                    <option className="bg-slate-900 text-white">
                      Credit / Debit Card
                    </option>
                </select>
              </div>

            </div>
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl bg-slate-800 p-8">
            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-slate-700 pb-4"
                >
                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>

                    <div className="mt-1 text-sm text-slate-400">
                      <p>Qty: {item.quantity}</p>

                      {item.size && (
                        <p>
                          Size:{" "}
                          <span className="font-semibold text-white">
                            {item.size}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  <p>
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-700 pt-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>

                <span className="text-emerald-400">
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                ⚠️ {error}
              </p>
            )}
            <button
              onClick={handlePlaceOrder}
              className="mt-8 w-full rounded-xl bg-emerald-400 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
            >
              Place Order
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;