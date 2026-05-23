import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './RotatingBadge.css';

const RotatingBadge = ({ text = "TRIOVITY SOLUTIONS • SEE A.I IN ACTION • " }) => {
  const characters = text.split('');
  const degree = 360 / characters.length;

  return (
    <div className="rotating-badge-wrapper">
      <motion.div 
        className="rotating-badge-spin"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="rotating-badge-text">
          {characters.map((char, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${i * degree}deg) translateY(-45px)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </motion.div>
      <div className="rotating-badge-center">
        <Star size={24} color="white" fill="white" />
      </div>
    </div>
  );
};

export default RotatingBadge;
