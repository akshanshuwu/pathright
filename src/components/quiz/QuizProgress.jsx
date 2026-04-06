import React from 'react';

export default function QuizProgress({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="text-sm text-gray-600 mb-2">Question {current} of {total}</div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
