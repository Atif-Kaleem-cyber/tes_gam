import React from 'react';

/**
 * NeonText - A component that adds a neon-glowing effect to text
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements (text content)
 * @param {string} props.color - Color of the neon text (default: 'blue')
 * @param {string} props.size - Size of the text (default: 'md')
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.animate - Whether to animate the text (default: false)
 * @param {boolean} props.flicker - Whether to add flickering effect (default: false)
 */
const NeonText = ({ 
  children, 
  color = 'blue', 
  size = 'md',
  className = '',
  animate = false,
  flicker = false,
  as: Component = 'span',
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
  
  // Map size prop to tailwind classes
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
    '2xl': 'text-5xl',
    '3xl': 'text-6xl',
  };
  
  const textColor = colorMap[color] || colorMap.blue;
  const textSize = sizeClasses[size] || sizeClasses.md;
  
  let animationClass = '';
  if (animate && flicker) {
    animationClass = 'animate-neon-flicker';
  } else if (animate) {
    animationClass = 'animate-pulse-glow';
  }
  
  return (
    <Component
      className={`${textSize} font-bold ${animationClass} ${className}`}
      style={{
        color: textColor,
        textShadow: `0 0 5px ${textColor}, 0 0 10px ${textColor}`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default NeonText;