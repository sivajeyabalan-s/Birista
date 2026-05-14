import React from 'react';
import './Specials.css';

const Specials = () => {
  return (
    <section className="specials">
      <div className="title-block wide">
        <h2 className="section-title">Birista House Specials</h2>
        <span className="ornament"></span>
      </div>
      <div className="specials-grid">
        <div className="special s1"></div>
        <div className="special s2"></div>
        <div className="special s3">
          <button className="circle-icon play" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M8 5v14l11-7z" /></svg>
          </button>
        </div>
        <div className="special s4"></div>
      </div>
    </section>
  );
};

export default Specials;
