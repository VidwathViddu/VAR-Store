import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import AIManager from "./components/AIManager";

import Home from "./pages/Home";
import Jerseys from "./pages/Jerseys";
import Boots from "./pages/Boots";
import AIPicks from "./pages/AIPicks";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetails from "./pages/ProductDetails";

function App() {
  
  const [cart, setCart] = useState([]);
  const [restartTutorial, setRestartTutorial] = useState(false);

  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existingProduct) {
        return prevCart.map((item) => {
          if (
            item.id === product.id &&
            item.size === product.size
          ) {
            return {
              ...item,
              quantity:
                item.quantity + (product.quantity || 1),
            };
          }

          return item;
        });
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: product.quantity || 1,
        },
      ];
    });
  }

  function handleIncreaseQuantity(productId, size) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (
          item.id === productId &&
          item.size === size
        ) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      })
    );
  }

  function handleDecreaseQuantity(productId, size) {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (
            item.id === productId &&
            item.size === size
          ) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemoveFromCart(productId, size) {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === productId &&
            item.size === size
          )
      )
    );
  }

  function handleRestartTutorial() {
  localStorage.removeItem("var-tutorial-completed");

  setRestartTutorial((previousValue) => !previousValue);
}

  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-screen max-w-none overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Main Content */}
        <div className="relative z-10">

          <AIManager
            restartTutorial={restartTutorial}
          />

          <Navbar
            cartCount={cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}
            handleRestartTutorial={handleRestartTutorial}
          />

          <div className="w-full pt-24">
            <Routes>

              <Route
                path="/"
                element={
                  <Home handleAddToCart={handleAddToCart} />
                }
              />

              <Route
                path="/jerseys"
                element={
                  <Jerseys handleAddToCart={handleAddToCart} />
                }
              />

              <Route
                path="/boots"
                element={
                  <Boots handleAddToCart={handleAddToCart} />
                }
              />

              <Route
                path="/aipicks"
                element={
                  <AIPicks handleAddToCart={handleAddToCart} />
                }
              />

              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    handleIncreaseQuantity={handleIncreaseQuantity}
                    handleDecreaseQuantity={handleDecreaseQuantity}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                }
              />

              <Route
                path="/checkout"
                element={
                  <Checkout
                    cart={cart}
                    setCart={setCart}
                  />
                }
              />

              <Route
                path="/order-success"
                element={<OrderSuccess />}
              />

              <Route
                path="/product/:id"
                element={
                  <ProductDetails
                    handleAddToCart={handleAddToCart}
                  />
                }
              />

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;