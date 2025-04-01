import React from 'react';

const Select = ({
  options,
  value,
  onChange,
  className = '',
  placeholder = 'Select an option',
  id,
  name,
  disabled = false,
  error,
  ...props
}) => {
  return (
    <div className="relative w-full">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full rounded-md 
          bg-[var(--bg-dark)] 
          border border-[var(--neon-blue)]/30
          text-white 
          py-2 px-4
          appearance-none
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
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--neon-blue)]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Select;
