import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#" className="logo" aria-label="Birista House"></a>
      <div className="nav-pill">
        <a href="#" className="active">Home</a>
        <a href="#about">About Us</a>
        <a href="#menu">Menu</a>
        <a href="#events">Events</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact Us</a>
        <a href="#order">Order Online</a>
      </div>
    </nav>
  );
};

export default Navbar;
