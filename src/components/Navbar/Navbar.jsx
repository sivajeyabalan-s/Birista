import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { href: '/',           label: 'Home',         section: null      },
  { href: '/#about',     label: 'About Us',     section: 'about'   },
  { href: '/menu',       label: 'Menu',         section: null      },
  { href: '/#services',  label: 'Services',     section: 'services'},
  { href: '/#gallery',   label: 'Gallery',      section: 'gallery' },
  { href: '/#contact',   label: 'Contact Us',   section: 'contact' },
  { href: '/#order',     label: 'Order Online', section: 'order'   },
];

const Navbar = () => {
  const [isOpen, setIsOpen]             = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  const isMenuPage = location.pathname === '/menu';
  const isHomePage = location.pathname === '/';

  // Track which home-page section is scrolled into view
  useEffect(() => {
    if (!isHomePage) { setActiveSection(null); return; }

    const sectionIds = NAV_LINKS.map(l => l.section).filter(Boolean);

    const handleScroll = () => {
      // Trigger when section top crosses 40% down from viewport top
      const trigger = window.scrollY + window.innerHeight * 0.4;
      let current = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= trigger) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const isActive = (link) => {
    if (isMenuPage) return link.href === '/menu';
    if (isHomePage) {
      if (activeSection) return link.section === activeSection;
      return link.href === '/';   // default: Home
    }
    return false;
  };

  return (
    <nav className="nav">
      <a href="/" className="logo" aria-label="Birista House" />

      {/* Desktop pill */}
      <div className="nav-pill">
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={isActive(link) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(o => !o)}
        aria-label="Toggle Menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-content">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={isActive(link) ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
