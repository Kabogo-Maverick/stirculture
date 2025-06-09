import React from "react";
import "../styles/Menutoo.css";

const menuItems = [
  {
    id: 1,
    name: "Berry Blast",
    img: "/images/cock1.jpeg",
    price: "Ksh 400",
    ingredients: "Mixed berries, mint leaves, lime, soda water"
  },
  {
    id: 2,
    name: "Tropical Sunset",
    img: "/images/cock2.jpeg",
    price: "Ksh 450",
    ingredients: "Pineapple juice, passionfruit, mango syrup, grenadine"
  },
  {
    id: 3,
    name: "Minty Mojito",
    img: "/images/cock3.jpeg",
    price: "Ksh 400",
    ingredients: "White rum, lime, mint, sugar, soda water"
  },
  {
    id: 4,
    name: "Neon Nights",
    img: "/images/cock4.jpeg",
    price: "Ksh 480",
    ingredients: "Blue curaçao, lemon juice, tonic water"
  },
  {
    id: 5,
    name: "Crimson Kiss",
    img: "/images/cock5.jpeg",
    price: "Ksh 430",
    ingredients: "Strawberries, vodka, cherry syrup, crushed ice"
  },
  {
    id: 1,
    name: "Berry Blast",
    img: "/images/cock1.jpeg",
    price: "Ksh 400",
    ingredients: "Mixed berries, mint leaves, lime, soda water"
  },
  {
    id: 2,
    name: "Tropical Sunset",
    img: "/images/cock2.jpeg",
    price: "Ksh 450",
    ingredients: "Pineapple juice, passionfruit, mango syrup, grenadine"
  },
  {
    id: 3,
    name: "Minty Mojito",
    img: "/images/cock3.jpeg",
    price: "Ksh 400",
    ingredients: "White rum, lime, mint, sugar, soda water"
  },
  {
    id: 4,
    name: "Neon Nights",
    img: "/images/cock4.jpeg",
    price: "Ksh 480",
    ingredients: "Blue curaçao, lemon juice, tonic water"
  },
  {
    id: 5,
    name: "Crimson Kiss",
    img: "/images/cock5.jpeg",
    price: "Ksh 430",
    ingredients: "Strawberries, vodka, cherry syrup, crushed ice"
  },
  {
    id: 1,
    name: "Berry Blast",
    img: "/images/cock1.jpeg",
    price: "Ksh 400",
    ingredients: "Mixed berries, mint leaves, lime, soda water"
  },
  {
    id: 2,
    name: "Tropical Sunset",
    img: "/images/cock2.jpeg",
    price: "Ksh 450",
    ingredients: "Pineapple juice, passionfruit, mango syrup, grenadine"
  },
  {
    id: 3,
    name: "Minty Mojito",
    img: "/images/cock3.jpeg",
    price: "Ksh 400",
    ingredients: "White rum, lime, mint, sugar, soda water"
  },
  {
    id: 4,
    name: "Neon Nights",
    img: "/images/cock4.jpeg",
    price: "Ksh 480",
    ingredients: "Blue curaçao, lemon juice, tonic water"
  },
  {
    id: 5,
    name: "Crimson Kiss",
    img: "/images/cock5.jpeg",
    price: "Ksh 430",
    ingredients: "Strawberries, vodka, cherry syrup, crushed ice"
  }
];

const Menutoo = () => {
  return (
    <section className="menu-print">
      <h2 className="menu-title">Cocktail Clubhouse Signature Menu</h2>
      <div className="menu-list">
        {menuItems.map(item => (
          <div className="menu-card" key={item.id}>
            <div className="menu-img-price">
              <img src={item.img} alt={item.name} />
              <span className="menu-price">{item.price}</span>
            </div>
            <div className="menu-text">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-ingredients"><em>{item.ingredients}</em></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menutoo;
