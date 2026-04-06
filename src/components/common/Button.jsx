import React from 'react';

export default function Button({ children, variant = 'primary', onClick, disabled, className = '' }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
