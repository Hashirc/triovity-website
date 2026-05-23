import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ words, interval = 3000, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`animated-text-container ${className}`} style={{ display: 'inline-block', position: 'relative', minWidth: '200px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ display: 'inline-block', position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible placeholder to maintain width based on the longest word */}
      <span style={{ visibility: 'hidden' }}>
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
};

export default AnimatedText;
