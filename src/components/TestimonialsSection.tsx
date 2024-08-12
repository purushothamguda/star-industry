import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        What Our Clients Say
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p>
          "Star Industry provided us with top-notch equipment that has
          transformed our bakery. Highly recommend!"
        </p>
        <p>- Happy Customer</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
