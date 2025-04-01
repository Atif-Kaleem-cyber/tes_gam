import React, { useState, useEffect } from 'react';

/**
 * BlinkingCursor - A component that creates a blinking cursor effect for text
 * 
 * @param {Object} props
 * @param {string} props.color - Color of the cursor (default: 'blue')
 * @param {string} props.className - Additional CSS classes
 */
const BlinkingCursor = ({ 
  color = 'blue', 
  className = '',
  ...props 
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Map color prop to CSS variable
  const colorMap = {
    blue: 'var(--neon-blue)',
    pink: 'var(--neon-pink)',
    green: 'var(--neon-green)',
    yellow: 'var(--neon-yellow)',
    purple: 'var(--neon-purple)',
  };
  
  const cursorColor = colorMap[color] || colorMap.blue;
  
  return (
    <span 
      className={`inline-block w-2 ${className}`}
      style={{
        height: '1.2em',
        backgroundColor: visible ? cursorColor : 'transparent',
        transition: 'background-color 0.1s ease',
        boxShadow: visible ? `0 0 5px ${cursorColor}, 0 0 10px ${cursorColor}` : 'none',
        marginBottom: '-0.1em',
      }}
      {...props}
    />
  );
};

export default BlinkingCursor;