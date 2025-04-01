import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  icon,
  error,
  id,
  name,
  required = false,
  disabled = false,
  ...props
}) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
      )}
      
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`
          w-full rounded-md 
          bg-[var(--bg-dark)] 
          border border-[var(--neon-blue)]/30
          text-white 
          py-2 px-4
          ${icon ? 'pl-10' : ''}
          placeholder:text-gray-400
          focus:outline-none 
          focus:ring-2 
          focus:ring-[var(--neon-blue)]/50
          focus:border-[var(--neon-blue)]
          transition-colors duration-200
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
          ${className}
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;
