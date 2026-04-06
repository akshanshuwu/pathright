import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find the exact tech course built for you.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take an 18-question quiz. Our AI reads your background, skills, and goals — then recommends your perfect learning path with a full 90-day roadmap.
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Take the Quiz — It's Free
          </button>
          <p className="text-sm text-gray-500 mt-4">
            18 questions · 5 career paths · AI-powered · 90-day roadmaps
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Take the Quiz</h3>
              <p className="text-gray-600">
                Answer 18 short questions about your background, interests, and goals. Takes about 5 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analyzes You</h3>
              <p className="text-gray-600">
                Our AI reads all your answers together and matches you to the courses that genuinely fit you — not generic advice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Roadmap</h3>
              <p className="text-gray-600">
                See your top 3 course matches with personalized explanations. Pick one and follow a 90-day week-by-week plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Course Preview Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(courses).map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate('/quiz')}
              >
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.tagline}</p>
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Learn More
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-center text-gray-600">
            <span>18 Questions</span>
            <span className="text-gray-300">·</span>
            <span>5 Courses</span>
            <span className="text-gray-300">·</span>
            <span>AI-Powered</span>
            <span className="text-gray-300">·</span>
            <span>90-Day Roadmaps</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to find your path?</h2>
          <button
            onClick={() => navigate('/quiz')}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Take the Quiz — It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400 text-sm">Copyright PathRight 2026</p>
      </footer>
    </div>
  );
}
