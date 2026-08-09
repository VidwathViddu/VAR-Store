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
    <div className="min-h-screen bg-slate-950 text-white px-10 py-10">
      <h1 className="text-4xl font-bold">
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <p className="mt-6 text-slate-400">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-800 p-6"
            >
              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="mt-2 text-slate-300">
                ₹{item.price}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="rounded-lg bg-slate-700 px-4 py-2"
                >
                  −
                </button>

                <span className="text-lg font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="rounded-lg bg-emerald-500 px-4 py-2"
                >
                  +
                </button>
                <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-4 rounded-lg bg-red-500 px-4 py-2 font-semibold hover:bg-red-600"
                >
                    Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-10 border-t border-slate-700 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Total
              </h2>

              <p className="text-2xl font-bold text-emerald-400">
                ₹{totalPrice}
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-slate-800 p-6">
            <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
            </div>

            <div className="mt-3 flex justify-between text-slate-300">
                <span>Shipping</span>
                <span className="text-emerald-400">FREE</span>
            </div>

            <div className="mt-4 border-t border-slate-700 pt-4">
                <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-emerald-400">
                    ₹{totalPrice}
                </span>
                </div>
            </div>

            <Link
                to="/checkout"
                className="mt-6 block w-full rounded-xl bg-emerald-500 py-4 text-center font-bold text-slate-950 hover:bg-emerald-400"
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