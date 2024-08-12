import React from "react";
import commercialKitchenPic from "../assets/commercialkitchen.jpg";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${commercialKitchenPic})`, // Use the imported image variable
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Enables the parallax effect
        color: "#fff",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Welcome to Star Industry
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
        Your One-Stop Solution for Bakery Machinery & Kitchen Equipment
      </p>
      <Link to="/products">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Explore Products
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
