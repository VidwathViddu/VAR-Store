import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

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

  function handleAddToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function handleIncreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      })
    );
  }

  function handleDecreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
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
  function handleRemoveFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <Navbar
          cartCount={cart.reduce(
            (total, item) => total + item.quantity,
            0
          )}
        />

        <div className="flex items-center justify-center pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <Home handleAddToCart={handleAddToCart} />
              }
            />

            <Route
              path="/jerseys"
              element={<Jerseys handleAddToCart={handleAddToCart}/>}
            />

            <Route
              path="/boots"
              element={<Boots />}
            />

            <Route
              path="/aipicks"
              element={<AIPicks />}
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
              element={<Checkout 
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
    </BrowserRouter>
  );
}

export default App;