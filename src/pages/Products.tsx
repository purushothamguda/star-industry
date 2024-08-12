import React from "react";
import Layout from "../components/Layout";

// Sample imports for placeholder images
import ovenPlaceholder from "../assets/oven-placeholder.jpg";
import displayCounterPlaceholder from "../assets/display-counter-placeholder.jpg";
import stallPlaceholder from "../assets/stall-placeholder.jpg";

const Products: React.FC = () => {
  return (
    <Layout>
      <h2>Our Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ width: "30%" }}>
          <img
            src={ovenPlaceholder}
            alt="Oven Placeholder"
            style={{ width: "100%" }}
          />
          <h3>Ovens</h3>
          <p>9, 12, 16, 24 Tray Gas Ovens, Deck & Rotary Ovens.</p>
        </div>
        <div style={{ width: "30%" }}>
          <img
            src={displayCounterPlaceholder}
            alt="Display Counter Placeholder"
            style={{ width: "100%" }}
          />
          <h3>Display Counters</h3>
          <p>Cool & Hot, Sweet Shop Display, Bakery Display.</p>
        </div>
        <div style={{ width: "30%" }}>
          <img
            src={stallPlaceholder}
            alt="Stall Placeholder"
            style={{ width: "100%" }}
          />
          <h3>Stalls</h3>
          <p>Tea Stall, Noodles Stall, Curry Point, Customized Stalls.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
