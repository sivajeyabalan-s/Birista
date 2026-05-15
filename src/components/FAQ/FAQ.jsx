import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./FAQ.css";

const EASE = [0.22, 1, 0.36, 1];
const VP   = { once: true, amount: 0.2 };

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    { q: "What are your business hours?",        a: "You can find our business hours on the website." },
    { q: "What type of Cuisine do you offer?",   a: "We specialize in authentic South Indian cuisine — biryanis, kebabs, dosas, curries and traditional handcrafted delicacies." },
    { q: "Do offer Take out Orders?",             a: "Yes — call us or order online and pick up at our Denton location." },
    { q: "Do you Offer Contact-free delivery?",  a: "Absolutely — select contact-free delivery at checkout and we'll leave it at your door." },
  ];

  return (
    <section className="faq" id="faq">
      <motion.div
        className="title-block wide"
        initial={shouldReduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="section-title">FAQ&rsquo;s</h2>
        <span className="ornament"></span>
      </motion.div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className={`faq-item ${openIndex === idx ? "open" : ""}`}
            initial={shouldReduce ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.65, ease: EASE, delay: 0.05 + idx * 0.1 }}
          >
            <div className="faq-q" onClick={() => toggleItem(idx)}>
              <span className="qtext">{faq.q}</span>
              <span className="chev">
                <svg viewBox="0 0 14 8" fill="none">
                  <path d="M1 1l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            {/* faq-a is NOT wrapped in motion — grid-template-rows accordion must stay intact */}
            <div className="faq-a">
              <div><p>{faq.a}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
