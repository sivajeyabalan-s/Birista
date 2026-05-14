import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-head">
        <div className="title-block thin" style={{ textAlign: 'left' }}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Menu</h2>
          <span className="ornament" style={{ marginLeft: 0 }}></span>
        </div>
        <div className="menu-filters">
          <button className="brown-btn">
            Full Menu
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M1 7h18M13 1l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="menu-grid">
        {/* Featured card */}
        <div className="menu-featured">
          <div className="img">
            <div className="circle-icon heart">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </div>
          </div>
          <div className="meta">
            <div className="row">
              <h3>Chicken Biryani</h3>
              <span className="price">$25.99</span>
            </div>
            <p>Fragrant basmati rice with tender chicken aromatic spices, slow-cooked for rich flavor.</p>
          </div>
          <div className="pills">
            <span className="menu-pill">Medium Spice</span>
            <span className="menu-pill">Fresh</span>
            <span className="menu-pill">Hot to Serve</span>
          </div>

        </div>

        {/* Side cards */}
        <div className="menu-list">
          <div className="menu-card card-1">
            <div className="img">
              <div className="circle-icon heart">
                <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
            </div>
            <div className="meta">
              <div className="row">
                <h4>Chili Panner</h4>
                <span className="price">$10.99</span>
              </div>
              <p>Crispy paneer cubes tossed with onions, capsicum, and green chilies ... <span style={{ color: '#fff' }}>More</span></p>
            </div>

          </div>

          <div className="menu-card card-2">
            <div className="img">
              <div className="circle-icon heart">
                <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
            </div>
            <div className="meta">
              <div className="row">
                <h4>Dal Tadka</h4>
                <span className="price">$8.49</span>
              </div>
              <p>Yellow lentils tempered with garlic, cumin, and aromatic Indian spices ... <span style={{ color: '#fff' }}>More</span></p>
            </div>

          </div>

          <div className="menu-card card-3">
            <div className="img">
              <div className="circle-icon heart">
                <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
            </div>
            <div className="meta">
              <div className="row">
                <h4>Hot and Sour Soup</h4>
                <span className="price">$3.99</span>
              </div>
              <p>A spicy and tangy vegetable soup with bold flavors and aromatic ... <span style={{ color: '#fff' }}>More</span></p>
            </div>

          </div>

          <div className="menu-card card-4">
            <div className="img">
              <div className="circle-icon heart">
                <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
            </div>
            <div className="meta">
              <div className="row">
                <h4>Butter Naan</h4>
                <span className="price">$5.49</span>
              </div>
              <p>Soft and fluffy Indian flatbread brushed with melted butter, freshly ... <span style={{ color: '#fff' }}>More</span></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
