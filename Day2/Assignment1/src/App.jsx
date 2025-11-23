import React, { useState } from "react";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import CartItem from "./components/CartItem";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <ProductList products={productsData} addToCart={addToCart} />

      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          index={index}
          removeFromCart={removeFromCart}
        />
      ))}

      <CartSummary cart={cart} />
    </div>
  );
}
