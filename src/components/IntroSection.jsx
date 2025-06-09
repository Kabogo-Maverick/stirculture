import React from "react";
import "../styles/IntroSection.css";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-image">
        <img src="/images/cock1.jpeg" alt="Cocktail Culture" />
      </div>
      <div className="intro-text">
        <h2>Discover Cocktail Clubhouse</h2>
        <p>
          At Stir Culture, we craft premium cocktails that bring people together.
          Whether you're here to savor classic favorites or explore new creations, your perfect sip awaits.
        </p>
        <button onClick={() => window.location.href = "/gallery"}>
          Explore Gallery
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
