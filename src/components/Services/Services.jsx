import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Services.css";

const EASE = [0.22, 1, 0.36, 1];
const VP   = { once: true, amount: 0.2 };

const SERVICE_DATA = [
  { cls: "s1", label: "Authentic Flavors" },
  { cls: "s2", label: "Signature Dishes" },
  { cls: "s3", label: "Service with a Smile" },
  { cls: "s4", label: "Passion on Every Plate" },
];

const Services = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="services" id="services">
      <motion.div
        className="title-block wide"
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="section-title">Services</h2>
        <span className="ornament"></span>
      </motion.div>

      <div className="services-grid">
        {SERVICE_DATA.map((svc, i) => (
          <motion.div
            key={svc.cls}
            className="service-card"
            initial={shouldReduce ? false : { opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.1 }}
            whileHover={shouldReduce ? {} : { scale: 1.04, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <motion.div
              className={`icon ${svc.cls}`}
              whileHover={shouldReduce ? {} : {
                scale: 1.12,
                rotate: [0, -4, 4, 0],
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            />
            <div className="label">{svc.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
