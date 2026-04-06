import React from 'react';

export default function ProgressWidget({ completedCount, totalCount, currentPhase }) {
  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
      <div className="text-4xl font-bold text-blue-600 mb-2">{Math.round(percentage)}%</div>
      <p className="text-gray-600 mb-4">{completedCount} of {totalCount} tasks completed</p>
      {currentPhase && <p className="text-sm text-gray-600">Current Phase: {currentPhase}</p>}
    </div>
  );
}
