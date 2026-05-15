import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Gallery.css";

const EASE = [0.22, 1, 0.36, 1];
const VP   = { once: true, amount: 0.15 };

const Gallery = () => {
  const shouldReduce = useReducedMotion();

  const tile = (delay) =>
    shouldReduce
      ? {}
      : {
          initial:     { opacity: 0, scale: 0.96 },
          whileInView: { opacity: 1, scale: 1 },
          viewport:    VP,
          transition:  { duration: 0.7, ease: EASE, delay },
        };

  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="title-block wide"
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="section-title">Gallery</h2>
        <span className="ornament"></span>
      </motion.div>

      <div className="gallery-row row-1">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="tile"
            {...tile(i * 0.1)}
            whileHover={shouldReduce ? {} : {
              scale: 1.04,
              filter: "brightness(1.15) saturate(1.3)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        ))}
      </div>

      <div className="gallery-row row-2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="tile"
            {...tile(0.3 + i * 0.1)}
            whileHover={shouldReduce ? {} : {
              scale: 1.04,
              filter: "brightness(1.15) saturate(1.3)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
