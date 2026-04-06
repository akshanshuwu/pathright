import React from 'react';

export default function Badge({ children, color = 'blue', className = '' }) {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
    purple: 'bg-purple-100 text-purple-700',
    teal: 'bg-teal-100 text-teal-700'
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
