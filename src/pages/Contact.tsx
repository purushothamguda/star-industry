import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    // Here, you would typically send the form data to your backend
  };

  const whatsappNumber = "+919704465509"; // Replace with the actual WhatsApp number
  const phoneNumber = "+919014538319"; // Replace with the actual phone number
  const mapsLink =
    "https://www.google.com/maps/place/STAR+INDUSTRY+Bakery+sweet+shop+%26+commercial+kitchen+equipment's+Display+counters,Oven's,+Juice,Tea,Fast+food+Stalls./@17.2057318,80.8446425,19z/data=!4m15!1m8!3m7!1s0x3a36826584cf6427:0xdbc9d386f6fc9fb6!2sSathupally,+Telangana+507303!3b1!8m2!3d17.208275!4d80.8394957!16s%2Fm%2F026tpsr!3m5!1s0x3a368343e4d9b8ad:0x3bd52dae24915541!8m2!3d17.2057798!4d80.8454473!16s%2Fg%2F11w4294r10?entry=ttu"; // Replace with the actual address link

  return (
    <Layout>
      <h2>Contact Us</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: "1",
            maxWidth: "500px",
            minWidth: "300px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", padding: "8px", height: "100px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {/* Contact Details Section */}
        <div
          style={{
            flex: "1",
            maxWidth: "500px",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <i className="fas fa-phone-alt" style={{ marginRight: "10px" }}></i>
            <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none" }}>
              {phoneNumber}
            </a>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <i
              className="fab fa-whatsapp"
              style={{ color: "#25D366", marginRight: "10px" }}
            ></i>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {whatsappNumber}
            </a>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#FF5733", marginRight: "10px" }}
            ></i>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Sathupally, Khammam(DT), Telangana -507303
            </a>
          </div>

          {/* Google Maps Embed */}
          <div style={{ width: "100%", marginTop: "20px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.8172660529901!2d80.84464252149712!3d17.205731753597192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a368343e4d9b8ad%3A0x3bd52dae24915541!2sSTAR%20INDUSTRY%20Bakery%20sweet%20shop%20%26%20commercial%20kitchen%20equipment&#39;s%20Display%20counters%2COven&#39;s%2C%20Juice%2CTea%2CFast%20food%20Stalls.!5e0!3m2!1sen!2sin!4v1723489376689!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
