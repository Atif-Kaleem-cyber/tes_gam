import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-[var(--neon-blue)] text-black hover:bg-[var(--neon-blue)]/90 neon-border',
  secondary: 'bg-[var(--neon-pink)] text-black hover:bg-[var(--neon-pink)]/90 neon-border-pink',
  success: 'bg-[var(--neon-green)] text-black hover:bg-[var(--neon-green)]/90 neon-border-green',
  outline: 'bg-transparent border border-[var(--neon-blue)] text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10',
  ghost: 'bg-transparent text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10',
};

const sizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <motion.button
      type={type}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        font-orbitron font-medium rounded-md 
        transition-all duration-300 ease-in-out 
        flex items-center justify-center gap-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
