import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { courses } from '../data/courses';
import { Sparkles, TrendingUp, ArrowRight, RotateCcw } from 'lucide-react';

export default function Results() {
  const navigate = useNavigate();
  const { aiResults, selectCourse, resetAll } = useAppContext();

  if (!aiResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Analysis Complete
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Your Personalized Results
          </h1>
          <p className="text-lg text-gray-600">
            Based on your unique profile and goals
          </p>
        </div>

        {/* User Summary */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Profile</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{aiResults.userSummary}</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Your Top Course Matches</h2>
        </div>

        {/* Course Recommendations */}
        <div className="space-y-8">
          {aiResults.recommendations.map((recommendation, index) => {
            const course = courses[recommendation.courseId];
            if (!course) return null;

            return (
              <div key={recommendation.courseId} className="relative group">
                {index === 0 && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg z-10 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Best Match
                  </div>
                )}
                <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                  index === 0 ? 'border-2 border-blue-300' : 'border border-gray-200'
                }`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 text-6xl group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h3>
                      <p className="text-xl text-gray-600 font-medium">{recommendation.headline}</p>
                    </div>
                    <div className="flex-shrink-0 text-center">
                      <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {recommendation.matchScore}%
                      </div>
                      <div className="text-sm text-gray-500 font-medium">Match</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Why it fits you:</h4>
                    <p className="text-gray-700 leading-relaxed text-base">{recommendation.whyItFitsYou}</p>
                  </div>

                  <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                      Your first step:
                    </h4>
                    <p className="text-gray-700 text-base">{recommendation.firstStep}</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSelectRoadmap(recommendation.courseId)}
                      className="group flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                    >
                      View 90-Day Roadmap
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => handleSaveDashboard(recommendation.courseId)}
                      className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-6 rounded-xl transition-all"
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
        <div className="text-center mt-16">
          <button
            onClick={handleRetake}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-lg group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Not what you expected? Retake the quiz
          </button>
        </div>
      </div>
    </div>
  );
}
