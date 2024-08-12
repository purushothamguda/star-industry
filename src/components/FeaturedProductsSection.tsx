import React from "react";
import ovenImage from "../assets/gas-oven.jpg";
import displayCounterImage from "../assets/display-counter.jpeg";
import stallImage from "../assets/stall-placeholder.jpg";

const FeaturedProductsSection: React.FC = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Featured Products
      </h2>
      <div
        className="product-grid"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "30%", textAlign: "center" }}>
          <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
            <img
              src={ovenImage}
              alt="Oven"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container without distortion
              }}
            />
          </div>
          <h3>Ovens</h3>
          <p>High-quality ovens for all your baking needs.</p>
        </div>
        <div style={{ width: "30%", textAlign: "center" }}>
          <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
            <img
              src={displayCounterImage}
              alt="Display Counter"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container without distortion
              }}
            />
          </div>
          <h3>Display Counters</h3>
          <p>Modern display counters to showcase your products.</p>
        </div>
        <div style={{ width: "30%", textAlign: "center" }}>
          <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
            <img
              src={stallImage}
              alt="Stall"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container without distortion
              }}
            />
          </div>
          <h3>Stalls</h3>
          <p>Custom stalls for your unique business needs.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
