import React from 'react';

/**
 * NeonBorder - A component that adds a neon-glowing border around its children
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} props.color - Color of the neon border (default: 'blue')
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.animate - Whether to animate the border (default: true)
 */
const NeonBorder = ({ 
  children, 
  color = 'blue', 
  className = '',
  animate = true,
  ...props 
}) => {
  // Map color prop to CSS variable
  const colorMap = {
    blue: 'var(--neon-blue)',
    pink: 'var(--neon-pink)',
    green: 'var(--neon-green)',
    yellow: 'var(--neon-yellow)',
    purple: 'var(--neon-purple)',
  };
  
  const borderColor = colorMap[color] || colorMap.blue;
  
  // Multiple layers for enhanced neon effect
  return (
    <div 
      className={`relative rounded-lg ${className}`}
      {...props}
    >
      {/* Base glow layer */}
      <div 
        className={`absolute inset-0 rounded-lg -z-10 ${animate ? 'animate-neon-fade' : ''}`}
        style={{
          boxShadow: `0 0 15px ${borderColor}, 0 0 30px ${borderColor}`,
          opacity: 0.2,
        }}
      />
      
      {/* Border layer */}
      <div 
        className={`absolute inset-0 rounded-lg -z-10 ${animate ? 'animate-neon-flicker' : ''}`}
        style={{
          boxShadow: `0 0 5px ${borderColor}, 0 0 10px ${borderColor}`,
          border: `1px solid ${borderColor}`,
          opacity: 0.8,
        }}
      />
      
      {/* Highlight corners for extra glow effect */}
      <div className="absolute w-4 h-4 top-0 left-0 border-t border-l rounded-tl-lg -z-10" 
        style={{ borderColor: borderColor, opacity: 0.9 }} />
      <div className="absolute w-4 h-4 top-0 right-0 border-t border-r rounded-tr-lg -z-10" 
        style={{ borderColor: borderColor, opacity: 0.9 }} />
      <div className="absolute w-4 h-4 bottom-0 left-0 border-b border-l rounded-bl-lg -z-10" 
        style={{ borderColor: borderColor, opacity: 0.9 }} />
      <div className="absolute w-4 h-4 bottom-0 right-0 border-b border-r rounded-br-lg -z-10" 
        style={{ borderColor: borderColor, opacity: 0.9 }} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeonBorder;