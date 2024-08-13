import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#e44b00";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "#ff5a00";
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-heading">
          Ready to Elevate Your Business with Innovative Solutions? Let's Get Started Today!
        </h2>
        <p className="footer-subheading">
          Contact us now to discuss how our tailored strategies can drive your success. We're here to help you every step of the way!
        </p>
        <div className="footer-button-container">
          <button 
            className="footer-button"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Login to get started
          </button>
        </div>

        <section className="footer-section">
          <div className="footer-column">
            <h6 className="footer-contact-title">Call us</h6>
            <h6 className="footer-contact-number">(021) 123-4567</h6>
            <h6 className="footer-contact-address">
              Plaza Sudirman, 3rd Floor <br />
              Jakarta, Indonesia 10250 <br /> job@journey.com
            </h6>
          </div>
          <div>
            <h6 className="footer-title">Community</h6>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Against Discrimination</a></li>
              <li><a href="#" className="footer-link">Invite Friends</a></li>
              <li><a href="#" className="footer-link">Gift Card</a></li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title">Booking Support</h6>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h6 className="footer-title">About</h6>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">How it works</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Media</a></li>
            </ul>
          </div>
        </section>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">All rights reserved © 2024 Selvendran @ nallicart.com</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} className="footer-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
