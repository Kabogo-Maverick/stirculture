// src/components/HeroSection.jsx
import React from "react";
import "../styles/HeroSection.css"; // External CSS for cleaner structure

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Cocktail Clubhouse</h1>
          <p className="hero-subtitle">
            Sip. Vibe. Play. Discover your new favorite space.
          </p>
          <div className="hero-buttons">
            <a href="/menu" className="hero-btn">
              Explore Menu
            </a>
            <a href="/vlogs" className="hero-btn alt">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
