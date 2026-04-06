import React from 'react';

export default function QuizOption({ option, selected, onClick, type }) {
  return (
    <div
      onClick={onClick}
      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
        selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center gap-3">
        {type === 'multi' && (
          <div className={`w-5 h-5 border-2 rounded ${selected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`} />
        )}
        {type === 'single' && (
          <div className={`w-5 h-5 border-2 rounded-full ${selected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`} />
        )}
        <span className="text-gray-900">{option.label}</span>
      </div>
    </div>
  );
}
