import React from 'react';

export default function CourseMatchCard({ course, recommendation, rank, onSelectRoadmap, onSaveDashboard }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{course.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
          <p className="text-sm text-gray-600">{recommendation.headline}</p>
        </div>
      </div>
      <div className="text-5xl font-bold text-blue-600 mb-4">{recommendation.matchScore}%</div>
      <p className="text-gray-700 mb-4">{recommendation.whyItFitsYou}</p>
      <div className="flex gap-3">
        <button onClick={onSelectRoadmap} className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg">
          View Roadmap
        </button>
        <button onClick={onSaveDashboard} className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg">
          Save to Dashboard
        </button>
      </div>
    </div>
  );
}
