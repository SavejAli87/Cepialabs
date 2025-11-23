import React from "react";

export default function CartItem({ item, index, removeFromCart }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      {item.name} - ₹{item.price}
      <button
        onClick={() => removeFromCart(index)}
        style={{ marginLeft: "10px" }}
      >
        Remove
      </button>
    </div>
  );
}