import React from "react";

const cartItems = [
  { id: 1, name: "A5 Notebook", price: 30, quantity: 2 },
  { id: 2, name: "Gel Pen Set", price: 45, quantity: 1 },
  { id: 3, name: "Engineering Tools Kit", price: 180, quantity: 1 },
];

const Cart = () => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Cart (Hamza)</h1>
      <p>This is a basic Cart UI for Phase 1 (static data, no backend yet).</p>

      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "16px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Product</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Quantity</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.price} EGP</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.quantity}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {item.price * item.quantity} EGP
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "16px" }}>Total: {total} EGP</h2>
    </div>
  );
};

export default Cart;
