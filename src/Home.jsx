import React from "react";

const Home = () => {
  const featuredProducts = [
    { id: 1, name: "A5 Notebook", price: 30 },
    { id: 2, name: "Gel Pen Set", price: 45 },
    { id: 3, name: "Engineering Tools Kit", price: 180 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AL-FARES (React Frontend)</h1>
      <p>Welcome to the Home Feature — Created by Hamza</p>

      <h2>Featured Products</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {featuredProducts.map((product) => (
          <div 
            key={product.id} 
            style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
          >
            <h3>{product.name}</h3>
            <p>{product.price} EGP</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
