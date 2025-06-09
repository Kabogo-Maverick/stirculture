import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Footer.css';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaLocationArrow,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <h2 className="footer-logo">
            Cocktail <span>Clubhouse</span>
          </h2>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            {/* <Link to="/games">Games</Link> */}
            <Link to="/vlogs">Vlogs</Link>
          </nav>
        </div>

        <p className="footer-description">
        Cocktail Clubhouse is where flavors, vibes, and stories blend. Whether you're here for the experience, the taste, or the moments, we serve nothing but unforgettable. Shake things up with us, every hour is a happy hour.
        </p>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-location">
            <FaLocationArrow />
            <div>
              <h4>Location</h4>
              <p>4736 Poe Lane, HOT SPRINGS, Montana-59845</p>
            </div>
          </div>
          <div className="footer-contact">
            <FaPhoneAlt />
            <div>
              <h4>Contact</h4>
              <p>913-473-7000</p>
              <p>stirculture@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
