import React from 'react';
import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = ({ items }) => {
  // Duplicate items to ensure smooth infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-track"
        animate={{ x: [0, -1035] }} // 1035 is an arbitrary width, it depends on items width. Better to use CSS for marquee usually.
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        style={{
             display: 'flex',
             width: 'fit-content'
        }}
      >
        {displayItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
