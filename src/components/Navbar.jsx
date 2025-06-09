import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setDarkMode(isDark);
    document.body.classList.toggle("dark-mode", isDark);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo-section" onClick={toggleDarkMode}>
          <img src="/images/logo.jpg" alt="Stir Culture Logo" className="logo" />
        </div>

        <h1 className="brand">Cocktail Clubhouse</h1>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          {/* <Link to="/games" onClick={() => setMenuOpen(false)}>Games</Link> */}
          <Link to="/vlogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
