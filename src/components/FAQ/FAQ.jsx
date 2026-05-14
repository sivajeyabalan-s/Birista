import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      q: "What are your business hours?",
      a: "You can find our business hours on the website."
    },
    {
      q: "What type of Cuisine do you offer?",
      a: "We specialize in authentic South Indian cuisine — biryanis, kebabs, dosas, curries and traditional handcrafted delicacies."
    },
    {
      q: "Do offer Take out Orders?",
      a: "Yes — call us or order online and pick up at our Denton location."
    },
    {
      q: "Do you Offer Contact-free delivery?",
      a: "Absolutely — select contact-free delivery at checkout and we'll leave it at your door."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="title-block thin">
        <h2 className="section-title">FAQ&rsquo;s</h2>
        <span className="ornament"></span>
      </div>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => toggleItem(idx)}>
              <span className="qtext">{faq.q}</span>
              <span className="chev">
                <svg viewBox="0 0 14 8" fill="none"><path d="M1 1l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            <div className="faq-a"><div><p>{faq.a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
