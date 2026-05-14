import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", active: true },
    { href: "/#about", label: "About Us" },
    { href: "/menu", label: "Menu" },
    { href: "/#events", label: "Events" },
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact Us" },
    { href: "/#order", label: "Order Online" },
  ];

  return (
    <nav className="nav">
      <a href="#" className="logo" aria-label="Birista House"></a>
      
      {/* Desktop Links */}
      <div className="nav-pill">
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className={link.active ? 'active' : ''}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger Icon */}
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={link.active ? 'active' : ''} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
