import React from "react";

export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <strong>{p.name}</strong> - ₹{p.price}
          <button
            onClick={() => addToCart(p)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
