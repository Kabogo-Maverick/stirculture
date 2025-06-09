import React from "react";
import "../styles/Mixologist.css";

export default function Mixologist() {
  return (
    <section className="mixologist-section">
      <div className="mixologist-grid">
        <div className="mixologist-image">
          <img src="/images/mix.jpg" alt="Our Mixologist" />
        </div>
        <div className="mixologist-text">
          <h2>Meet Our Master Mixologist</h2>
          <p>
            With a refined palate and a passion for liquid artistry, our lead mixologist
            curates an experience beyond taste. Every cocktail is crafted like a signature
            with balance, beauty, and bold creativity.
          </p>
          <p>
            From exotic ingredients to timeless classics, they bring sophistication to every sip.
            Their style blends modern mixology with cultural influences, ensuring each guest
            feels the story behind their glass.
          </p>
        </div>
      </div>
    </section>
  );
}
