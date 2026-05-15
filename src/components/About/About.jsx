import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import './About.css';

const EASE = [0.22, 1, 0.36, 1];

const About = () => {
  const shouldReduce = useReducedMotion();

  // Keep useInView only for the counter — everything else uses whileInView
  const statsRef    = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const [count7,   setCount7]   = useState(shouldReduce ? 7   : 0);
  const [count100, setCount100] = useState(shouldReduce ? 100 : 0);

  useEffect(() => {
    if (!statsInView || shouldReduce) return;
    let start = null;
    const duration = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setCount7(Math.round(eased * 7));
      setCount100(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [statsInView, shouldReduce]);

  const vp = { once: true, amount: 0.2 };

  return (
    <section className="about" id="about">
      <motion.div
        className="title-block wide"
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="section-title">About Us</h2>
        <span className="ornament"></span>
      </motion.div>

      <div className="about-row">
        {/* Stats card */}
        <motion.div
          className="about-stats"
          ref={statsRef}
          initial={shouldReduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.75, ease: EASE, delay: 0.3 }}
        >
          <div className="about-stat">
            <span className="num">{count7}+</span>
            <span className="lbl">Year Experiences</span>
          </div>
          <div className="about-stat">
            <span className="num">{count100}%</span>
            <span className="lbl">Customer Satisfaction</span>
          </div>
        </motion.div>

        {/* Three photos — stagger left to right */}
        <div className="about-photos">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="photo"
              initial={shouldReduce ? false : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.75, ease: EASE, delay: 0.15 + i * 0.18 }}
            />
          ))}
        </div>

        <motion.h3
          style={{ gridArea: 'heading' }}
          initial={shouldReduce ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          A Celebration of Flavors
        </motion.h3>

        <motion.p
          style={{ gridArea: 'copy' }}
          initial={shouldReduce ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
        >
          At Birista House, we believe that every meal is a celebration, a
          moment to savor and remember. Inspired by the art of traditional
          Indian cooking, our restaurant brings the rich, authentic flavors of
          India to the heart of Denton, Texas. From our signature golden,
          crispy Birista onions to our aromatic Hyderabadi Biryani, every dish
          we serve is crafted with love, precision, and a touch of modern
          innovation.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
