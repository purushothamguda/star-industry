import React from "react";

const Footer: React.FC = () => {
  const whatsappNumber = "+919014538319"; // Replace with the actual phone number
  const mapsLink =
    "https://www.google.com/maps/place/STAR+INDUSTRY+Bakery+sweet+shop+%26+commercial+kitchen+equipment's+Display+counters,Oven's,+Juice,Tea,Fast+food+Stalls./@17.2057318,80.8446425,19z/data=!4m15!1m8!3m7!1s0x3a36826584cf6427:0xdbc9d386f6fc9fb6!2sSathupally,+Telangana+507303!3b1!8m2!3d17.208275!4d80.8394957!16s%2Fm%2F026tpsr!3m5!1s0x3a368343e4d9b8ad:0x3bd52dae24915541!8m2!3d17.2057798!4d80.8454473!16s%2Fg%2F11w4294r10?entry=ttu"; // Replace with the actual address link

  return (
    <footer
      style={{
        backgroundColor: "#1c1c1e", // Darker background color for a modern look
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Social Media Links */}
        <div style={{ marginBottom: "10px" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1877F2", // Facebook blue color
              marginRight: "15px",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1DA1F2", // Twitter blue color
              marginRight: "15px",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#25D366", // WhatsApp green color
              marginRight: "15px",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FF5733", // Custom color for Maps icon
              marginRight: "15px",
              fontSize: "24px",
              textDecoration: "none",
            }}
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
        </div>

        {/* Proprietor Information */}
        <p style={{ marginBottom: "10px", fontSize: "14px", color: "#b3b3b3" }}>
          Proprietor: MD Asgar Ali
        </p>

        {/* Copyright Information */}
        <p style={{ marginBottom: "0", fontSize: "14px", color: "#b3b3b3" }}>
          © {new Date().getFullYear()} Star Industry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
