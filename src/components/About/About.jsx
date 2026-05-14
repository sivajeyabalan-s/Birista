import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="title-block">
        <h2 className="section-title">About Us</h2>
        <span className="ornament"></span>
      </div>

      <div className="about-row">
        {/* Stats card (sits over bottom of column 1) */}
        <div className="about-stats">
          <div className="about-stat">
            <span className="num">7+</span>
            <span className="lbl">Year Experiences</span>
          </div>
          <div className="about-stat">
            <span className="num">100%</span>
            <span className="lbl">Customer Satisfaction</span>
          </div>
        </div>

        {/* Three photos */}
        <div className="about-photos">
          <div className="photo"></div>
          <div className="photo"></div>
          <div className="photo"></div>
        </div>

        {/* Right copy */}
        <div className="about-text">
          <h3>A Celebration of Flavors</h3>
          <p>
            At Birista House, we believe that every meal is a celebration, a moment
            to savor and remember. Inspired by the art of traditional Indian
            cooking, our restaurant brings the rich, authentic flavors of India to
            the heart of Denton, Texas. From our signature golden, crispy Birista
            onions to our aromatic Hyderabadi Biryani, every dish we serve is
            crafted with love, precision, and a touch of modern innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
