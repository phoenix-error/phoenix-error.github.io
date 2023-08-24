import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Luca Becker</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://medium.com/@phoenix-dev"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-medium"></i>
          </a>

          <a
            href="https://github.com/phoenix-error"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://twitter.com/Phoenix_dev_"
            className="footer__social-link"
            target="_blank" rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; pheonix-error. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
