// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import FeaturedCocktails from "../components/FeaturedCocktails";
import Mixologist from "../components/Mixologist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection /> 
      <Mixologist />
      <FeaturedCocktails />
      <Footer />
    </div>
  );
}
