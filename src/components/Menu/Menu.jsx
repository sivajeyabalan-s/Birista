import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import "./Menu.css";

const EASE = [0.22, 1, 0.36, 1];
const VP   = { once: true, amount: 0.2 };

const SIDE_CARDS = [
  { cls: "card-1", img: 'url("/assets/menu/chilli paneer.jpg")',       name: "Chilli Paneer",      price: "$12.99", desc: "Soft paneer cubes tossed in spicy Indo-Chinese chilli and pepper sauce ..." },
  { cls: "card-2", img: 'url("/assets/menu/chicken pepper fry.jpg")',   name: "Chicken Pepper Fry", price: "$14.99", desc: "Juicy chicken stir-fried with coarsely crushed black pepper and spices ..." },
  { cls: "card-3", img: 'url("/assets/menu/thai milk tea.jpg")',         name: "Thai Milk Tea",      price: "$5.99",  desc: "Sweet, spiced Thai-style orange milk tea with silky boba pearls ..." },
  { cls: "card-4", img: 'url("/assets/menu/buttern naan.jpg")',          name: "Butter Naan",        price: "$50",    desc: "Classic tandoor naan finished with a generous slather of fresh butter ..." },
];

const Menu = () => {
  const shouldReduce = useReducedMotion();
  const ri = (props) => shouldReduce ? { initial: false, ...props } : props;

  return (
    <section className="menu" id="menu">
      <motion.div
        className="menu-head"
        {...ri({
          initial:    { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport:   VP,
          transition: { duration: 0.7, ease: EASE },
        })}
      >
        <div className="title-block wide">
          <h2 className="section-title">Menu</h2>
          <span className="ornament"></span>
        </div>
      </motion.div>

      <div className="menu-grid">
        <motion.div
          className="menu-featured"
          {...ri({
            initial:    { opacity: 0, x: -70 },
            whileInView: { opacity: 1, x: 0 },
            viewport:   VP,
            transition: { duration: 0.9, ease: EASE, delay: 0.1 },
          })}
        >
          <div className="img" style={{ backgroundImage: 'url("/assets/menu/chicken pulav.jpg")' }}></div>
          <div className="meta">
            <div className="row">
              <h3>Chicken Pulav</h3>
              <span className="price">$15.49</span>
            </div>
            <p>Golden fried chicken pieces served alongside fragrant, well-spiced pulav rice.</p>
          </div>
          <div className="pills">
            <span className="menu-pill">Medium Spice</span>
            <span className="menu-pill">Fresh</span>
            <span className="menu-pill">Hot to Serve</span>
          </div>
        </motion.div>

        <div className="menu-list">
          {SIDE_CARDS.map((card, i) => (
            <motion.div
              key={card.cls}
              className={`menu-card ${card.cls}`}
              {...ri({
                initial:    { opacity: 0, x: 60 },
                whileInView: { opacity: 1, x: 0 },
                viewport:   VP,
                transition: { duration: 0.75, ease: EASE, delay: 0.15 + i * 0.1 },
              })}
            >
              <div className="img" style={{ backgroundImage: card.img }}></div>
              <div className="meta">
                <div className="row">
                  <h4>{card.name}</h4>
                  <span className="price">{card.price}</span>
                </div>
                <p>{card.desc} <span style={{ color: "#fff" }}>More</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="menu-cta"
        {...ri({
          initial:    { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport:   VP,
          transition: { duration: 0.6, ease: EASE, delay: 0.2 },
        })}
      >
        <Link className="brown-btn" to="/menu">
          Full Menu
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 7h18M13 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default Menu;
