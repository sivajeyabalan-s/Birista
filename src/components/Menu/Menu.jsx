import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-head">
        <div className="title-block wide">
          <h2 className="section-title">Menu</h2>
          <span className="ornament"></span>
        </div>
      </div>

      <div className="menu-grid">
        {/* Featured card */}
        <div className="menu-featured">
          <div
            className="img"
            style={{ backgroundImage: 'url("/assets/menu/chicken pulav.jpg")' }}
          ></div>
          <div className="meta">
            <div className="row">
              <h3>Chicken Pulav</h3>
              <span className="price">$15.49</span>
            </div>
            <p>
              Golden fried chicken pieces served alongside fragrant, well-spiced
              pulav rice.
            </p>
          </div>
        </div>

        {/* Side cards */}
        <div className="menu-list">
          <div className="menu-card card-1">
            <div
              className="img"
              style={{
                backgroundImage: 'url("/assets/menu/chilli paneer.jpg")',
              }}
            ></div>
            <div className="meta">
              <div className="row">
                <h4>Chilli Paneer</h4>
                <span className="price">$12.99</span>
              </div>
              <p>
                Soft paneer cubes tossed in spicy Indo-Chinese chilli and pepper
                sauce ... <span style={{ color: "#fff" }}>More</span>
              </p>
            </div>
          </div>

          <div className="menu-card card-2">
            <div
              className="img"
              style={{
                backgroundImage: 'url("/assets/menu/chicken pepper fry.jpg")',
              }}
            ></div>
            <div className="meta">
              <div className="row">
                <h4>Chicken Pepper Fry</h4>
                <span className="price">$14.99</span>
              </div>
              <p>
                Juicy chicken stir-fried with coarsely crushed black pepper and
                spices ... <span style={{ color: "#fff" }}>More</span>
              </p>
            </div>
          </div>

          <div className="menu-card card-3">
            <div
              className="img"
              style={{
                backgroundImage: 'url("/assets/menu/thai milk tea.jpg")',
              }}
            ></div>
            <div className="meta">
              <div className="row">
                <h4>Thai Milk Tea</h4>
                <span className="price">$5.99</span>
              </div>
              <p>
                Sweet, spiced Thai-style orange milk tea with silky boba pearls
                ... <span style={{ color: "#fff" }}>More</span>
              </p>
            </div>
          </div>

          <div className="menu-card card-4">
            <div
              className="img"
              style={{
                backgroundImage: 'url("/assets/menu/buttern naan.jpg")',
              }}
            ></div>
            <div className="meta">
              <div className="row">
                <h4>Butter Naan</h4>
                <span className="price">$50</span>
              </div>
              <p>
                Classic tandoor naan finished with a generous slather of fresh
                butter ... <span style={{ color: "#fff" }}>More</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-cta">
        <Link className="brown-btn" to="/menu">
          Full Menu
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M1 7h18M13 1l6 6-6 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
