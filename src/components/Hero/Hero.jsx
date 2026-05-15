import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero-title">
        <span className="welcome">WELCOME TO</span>
        <span className="brand">BIRISTA HOUSE</span>
      </h1>
      <p className="hero-desc">
        Experience the authentic taste of tradition with our rich, aromatic
        biryanis, sizzling kebabs, and handcrafted delicacies. Made with passion,
        served with warmth.
      </p>

      {/* Floating glass pills */}
      <div className="tag left">
        <div className="inner-flip">
          <span className="dot"></span>
          <span className="label">Dive into a World of Flavours</span>
        </div>
      </div>
      <div className="tag right">
        <span className="dot"></span>
        <span className="label">NO.1 South Indian Restaurant</span>
      </div>

      <a href="#menu" className="brown-btn hero-cta">Explore More</a>
    </header>
  );
};

export default Hero;
