import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { courses } from '../data/courses';
import CourseMatchCard from '../components/results/CourseMatchCard';

export default function Results() {
  const navigate = useNavigate();
  const { aiResults, selectCourse, resetAll } = useAppContext();

  if (!aiResults) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">No results available</p>
      </div>
    );
  }

  const handleSelectRoadmap = (courseId) => {
    selectCourse(courseId);
    navigate(`/roadmap/${courseId}`);
  };

  const handleSaveDashboard = (courseId) => {
    selectCourse(courseId);
    navigate('/dashboard');
  };

  const handleRetake = () => {
    resetAll();
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* User Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">👤</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Your Profile</h3>
              <p className="text-gray-700 leading-relaxed">{aiResults.userSummary}</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Top Course Matches</h2>

        {/* Course Recommendations */}
        <div className="space-y-6">
          {aiResults.recommendations.map((recommendation, index) => {
            const course = courses[recommendation.courseId];
            if (!course) return null;

            return (
              <div key={recommendation.courseId} className="relative">
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                    Best Match
                  </div>
                )}
                <div className={`bg-white rounded-2xl shadow-sm p-6 ${
                  index === 0 ? `border-2 border-${course.colors.border}` : 'border border-gray-200'
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{course.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h3>
                      <p className="text-lg text-gray-600">{recommendation.headline}</p>
                    </div>
                    <div className={`text-5xl font-bold text-${course.colors.text}`}>
                      {recommendation.matchScore}%
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Why it fits you:</h4>
                    <p className="text-gray-700 leading-relaxed">{recommendation.whyItFitsYou}</p>
                  </div>

                  <div className="mb-6 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">First step:</h4>
                    <p className="text-gray-700">{recommendation.firstStep}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleSelectRoadmap(recommendation.courseId)}
                      className={`flex-1 bg-${course.colors.button} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity`}
                      style={{ backgroundColor: `var(--${course.colors.button})` }}
                    >
                      View 90-Day Roadmap
                    </button>
                    <button
                      onClick={() => handleSaveDashboard(recommendation.courseId)}
                      className={`flex-1 border-2 border-${course.colors.border} text-${course.colors.text} hover:bg-${course.colors.bg} font-semibold py-3 px-6 rounded-lg transition-colors`}
                    >
                      Save to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retake Link */}
        <div className="text-center mt-12">
          <button
            onClick={handleRetake}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Not what you expected? Retake the quiz
          </button>
        </div>
      </div>
    </div>
  );
}
