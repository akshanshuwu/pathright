import React from 'react';

export default function ProgressBar({ value = 0, color = 'blue', label = '', className = '' }) {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    amber: 'bg-amber-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
    teal: 'bg-teal-600'
  };

  return (
    <div className={className}>
      {label && <div className="text-sm text-gray-600 mb-2">{label}</div>}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${colors[color]}`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
