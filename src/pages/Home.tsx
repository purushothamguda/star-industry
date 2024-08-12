import React from "react";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";

const Home: React.FC = () => {
  return (
    <Layout>
      {/* <h2>Welcome to Star Industry</h2>
      <p>Your one-stop solution for bakery machinery and kitchen equipment.</p>
      Add more content here */}
      <HeroSection />
      <AboutSection />
      <FeaturedProductsSection />
      {/* <TestimonialsSection /> */}
    </Layout>
  );
};

export default Home;
