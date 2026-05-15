import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Specials.css';

const EASE    = [0.22, 1, 0.36, 1];
const VP      = { once: true, amount: 0.2 };
const CLASSES = ['s1', 's2', 's3', 's4'];

const Specials = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="specials">
      <motion.div
        className="title-block wide"
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="section-title">Birista House Specials</h2>
        <span className="ornament"></span>
      </motion.div>

      <div className="specials-grid">
        {CLASSES.map((cls, i) => (
          <motion.div
            key={cls}
            className={`special ${cls}`}
            initial={shouldReduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.75, ease: EASE, delay: 0.05 + i * 0.1 }}
          >
            <button className="circle-icon play" aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="#fff" stroke="none">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
