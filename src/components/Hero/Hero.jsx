import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';

const EASE = [0.22, 1, 0.36, 1];

const Hero = () => {
  const shouldReduce = useReducedMotion();

  const anim = (props) =>
    shouldReduce
      ? { initial: false }
      : props;

  return (
    <header className="hero">
      {/* Ken Burns background */}
      <div className="hero-bg-anim" />

      <h1 className="hero-title">
        <motion.span
          className="welcome"
          {...anim({
            initial: { opacity: 0, x: -60 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, ease: EASE, delay: 0.3 },
          })}
        >
          WELCOME TO
        </motion.span>

        {/* brand-clip creates the slot-reveal effect */}
        <span className="brand-clip">
          <motion.span
            className="brand"
            style={{ display: 'block' }}
            {...anim({
              initial: { opacity: 0, y: 80 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, ease: EASE, delay: 0.55 },
            })}
          >
            BIRISTA HOUSE
          </motion.span>
        </span>
      </h1>

      <motion.p
        className="hero-desc"
        {...anim({
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: EASE, delay: 0.85 },
        })}
      >
        Experience the authentic taste of tradition with our rich, aromatic
        biryanis, sizzling kebabs, and handcrafted delicacies. Made with passion,
        served with warmth.
      </motion.p>

      {/* Floating glass pills */}
      <motion.div
        className="tag left"
        {...anim({
          initial: { opacity: 0, x: -80 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: EASE, delay: 1.05 },
        })}
      >
        <div className="inner-flip">
          <span className="dot"></span>
          <span className="label">Dive into a World of Flavours</span>
        </div>
      </motion.div>

      <motion.div
        className="tag right"
        {...anim({
          initial: { opacity: 0, x: 80 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: EASE, delay: 1.05 },
        })}
      >
        <span className="dot"></span>
        <span className="label">NO.1 South Indian Restaurant</span>
      </motion.div>

      <motion.a
        href="#menu"
        className="brown-btn hero-cta"
        {...anim({
          initial: { opacity: 0, scale: 0.88 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, ease: EASE, delay: 1.3 },
        })}
      >
        Explore More
      </motion.a>
    </header>
  );
};

export default Hero;
