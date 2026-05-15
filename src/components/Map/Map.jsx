import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-wrap" id="contact">
      <iframe
        title="Birista House Location"
        src="https://maps.google.com/maps?q=321+W+Hickory+St+Ste+100,+Denton,+TX+76201&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
