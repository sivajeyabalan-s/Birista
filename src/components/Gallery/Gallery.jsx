import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="title-block wide">
        <h2 className="section-title">Gallery</h2>
        <span className="ornament"></span>
      </div>
      <div className="gallery-row row-1">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
      <div className="gallery-row row-2">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>
    </section>
  );
};

export default Gallery;
