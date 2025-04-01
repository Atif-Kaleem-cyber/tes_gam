import React from 'react';

const variants = {
  primary: 'bg-[var(--neon-blue)]/20 text-[var(--neon-blue)] border-[var(--neon-blue)]/30',
  secondary: 'bg-[var(--neon-pink)]/20 text-[var(--neon-pink)] border-[var(--neon-pink)]/30',
  success: 'bg-[var(--neon-green)]/20 text-[var(--neon-green)] border-[var(--neon-green)]/30',
  purple: 'bg-[var(--neon-purple)]/20 text-[var(--neon-purple)] border-[var(--neon-purple)]/30',
  yellow: 'bg-[var(--neon-yellow)]/20 text-[var(--neon-yellow)] border-[var(--neon-yellow)]/30',
};

const Badge = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5
        text-xs font-semibold
        rounded-full
        border
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
