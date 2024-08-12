import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: "#FFD700", // Yellow background color matching the card
        padding: "20px 40px", // Increased padding for more height
        color: "#000", // Black text color
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for a classy look
      }}
    >
      {/* Logo or Site Title */}
      <div>
        <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: "bold" }}>
          <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
            Star Industry
          </Link>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "30px", // Increased gap for spacing
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link
              to="/about"
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              About
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
