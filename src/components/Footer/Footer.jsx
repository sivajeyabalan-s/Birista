import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div className="col-brand">
          <div className="flogo"></div>
          <div className="links">
            Privacy Policy | Terms &amp; Conditions | Refund Policy
          </div>
          <div className="socials">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .5-2 2-2h2V2h-3.5C11 2 10 3.5 10 5.5V10H7v4h3v8h3z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24">
                <path d="M22 7.5a3 3 0 0 0-2.1-2.1C18 5 12 5 12 5s-6 0-7.9.4A3 3 0 0 0 2 7.5C1.5 9.4 1.5 12 1.5 12s0 2.6.5 4.5a3 3 0 0 0 2.1 2.1C6 19 12 19 12 19s6 0 7.9-.4a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.5.5-4.5s0-2.6-.5-4.5zM10 15V9l5 3-5 3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-1.1 0-1.7.2-2.1.4-.5.2-.9.5-1.3.9-.4.4-.7.8-.9 1.3-.2.4-.3 1-.4 2.1C2.4 8.5 2.4 8.8 2.4 12s0 3.5.1 4.8c0 1.1.2 1.7.4 2.1.2.5.5.9.9 1.3.4.4.8.7 1.3.9.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1 0 1.7-.2 2.1-.4.5-.2.9-.5 1.3-.9.4-.4.7-.8.9-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c0-1.1-.2-1.7-.4-2.1-.2-.5-.5-.9-.9-1.3-.4-.4-.8-.7-1.3-.9-.4-.2-1-.3-2.1-.4C15.5 4 15.2 4 12 4zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="col-links">
          <h4>Quick Link</h4>
          <ul>
            <li>
              <a href="/">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="/#about">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                About Us
              </a>
            </li>
            <li>
              <a href="/#menu">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                Menu
              </a>
            </li>
            <li>
              <a href="/#services">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a href="/#gallery">
                <svg viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="col-hours">
          <h4>Opening Hours</h4>
          <div className="hours">
            Monday - Saturday 12:00 PM - 06:00 PM
            <br />
            Sunday 11:00 - 23:00
          </div>
        </div>

        <div className="col-contact">
          <h4>Get In Touch</h4>
          <a className="brown-btn" href="#">
            Order Online
          </a>
          <div className="address">
            123 Demo Street, Sample City, TX 75001
            <br />
            +1 (555) 123-4567
            <br />
            hello@example.com
          </div>
        </div>
      </div>

      <div className="copyright">
        <a
          href="https://maghil.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Powered by Maghil"
        >
          <img
            className="footer-credit"
            src="/assets/Powered by Maghil 2026.png"
            alt="Powered by Maghil 2026"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
