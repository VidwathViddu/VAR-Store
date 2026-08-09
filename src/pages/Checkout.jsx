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
  function handlePlaceOrder() {
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
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold">
          Checkout 💳
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          {/* Customer Details */}
          <div className="rounded-2xl bg-slate-800 p-8">
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
                    className="w-full rounded-xl bg-slate-700 px-4 py-3 outline-none"
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
                    className="w-full rounded-xl bg-slate-700 px-4 py-3 outline-none"
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
                    className="w-full rounded-xl bg-slate-700 px-4 py-3 outline-none"
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
                    className="w-full rounded-xl bg-slate-700 px-4 py-3 outline-none"
                    >
                    <option>Cash on Delivery</option>
                    <option>UPI</option>
                    <option>Credit / Debit Card</option>
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

                    <p className="text-sm text-slate-400">
                      Qty: {item.quantity}
                    </p>
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

            <button
                onClick={handlePlaceOrder}
                className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-bold text-slate-950 hover:bg-emerald-400"
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