import React from "react";
import "../styles/FeaturedCocktails.css";

const cocktails = [
  {
    name: "Crimson Bliss",
    image: "/images/cock1.jpeg",
    ingredients: "Vodka, Cranberry, Lime",
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Sunset Zest",
    image: "/images/cock2.jpeg",
    ingredients: "Tequila, Orange, Chili",
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    name: "Mint Mirage",
    image: "/images/cock3.jpeg",
    ingredients: "Rum, Mint, Lime",
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Velvet Noir",
    image: "/images/cock4.jpeg",
    ingredients: "Whiskey, Espresso, Chocolate",
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    name: "Peach Parade",
    image: "/images/cock5.jpeg",
    ingredients: "Gin, Peach, Tonic",
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
];

const FeaturedCocktails = () => {
  return (
    <section className="featured-cocktails">
      <h2>🍸 Featured Cocktails</h2>
      <div className="cocktail-grid">
        {cocktails.map((cocktail, idx) => (
          <div key={idx} className="cocktail-card">
            <img src={cocktail.image} alt={cocktail.name} />
            <div className="overlay">
              <h3>{cocktail.name}</h3>
              <p>{cocktail.ingredients}</p>
              <span>{cocktail.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCocktails;
