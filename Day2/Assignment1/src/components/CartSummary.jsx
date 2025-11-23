export default function CartSummary({ cart }) {
  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price, 0)
    : 0;

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Total Items: {Array.isArray(cart) ? cart.length : 0}</p>
      <p>Total Price: ₹{total}</p>
    </div>
  );
}
