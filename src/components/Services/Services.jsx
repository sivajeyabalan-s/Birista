import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="title-block">
        <h2 className="section-title">Services</h2>
        <span className="ornament"></span>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon"></div>
          <div className="label">Authentic Flavors</div>
        </div>
        <div className="service-card">
          <div className="icon"></div>
          <div className="label">Signature Dishes</div>
        </div>
        <div className="service-card">
          <div className="icon"></div>
          <div className="label">Service with a Smile</div>
        </div>
        <div className="service-card">
          <div className="icon"></div>
          <div className="label">Passion on Every Plate</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
