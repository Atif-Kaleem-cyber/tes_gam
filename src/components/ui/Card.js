import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowColor = 'blue',
  ...props 
}) => {
  // Map the glow color to CSS variables with theme-aware values
  const glowStyles = {
    blue: 'hover:shadow-[0_0_15px_var(--shadow-color,rgba(0,225,255,0.5))]',
    pink: 'hover:shadow-[0_0_15px_rgba(246,24,246,0.5)]',
    green: 'hover:shadow-[0_0_15px_rgba(12,255,12,0.5)]',
    purple: 'hover:shadow-[0_0_15px_rgba(188,19,254,0.5)]',
  };

  return (
    <motion.div
      className={`
        card-bg
        ${hoverEffect ? 'transition-all duration-300 ease-in-out ' + glowStyles[glowColor] : ''}
        ${className}
      `}
      whileHover={hoverEffect ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
