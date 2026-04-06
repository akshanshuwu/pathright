import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';
import { Sparkles, Target, Rocket, ArrowRight, X } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4" />
            AI-Powered Career Guidance
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in">
            Find the exact tech course
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              built for you.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Take an 18-question quiz. Our AI reads your background, skills, and goals — then recommends your perfect learning path with a full 90-day roadmap.
          </p>
          
          <button
            onClick={() => navigate('/quiz')}
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            Take the Quiz — It's Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              18 questions
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              5 career paths
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              90-day roadmaps
            </span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Three simple steps to your perfect tech career</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div className="mb-4 text-blue-600">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Take the Quiz</h3>
              <p className="text-gray-600 leading-relaxed">
                Answer 18 short questions about your background, interests, and goals. Takes about 5 minutes.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="mb-4 text-indigo-600">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Analyzes You</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI reads all your answers together and matches you to the courses that genuinely fit you — not generic advice.
              </p>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="mb-4 text-purple-600">
                <Rocket className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Roadmap</h3>
              <p className="text-gray-600 leading-relaxed">
                See your top 3 course matches with personalized explanations. Pick one and follow a 90-day week-by-week plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Course Preview Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h2>
            <p className="text-lg text-gray-600">Choose from 5 in-demand tech career paths</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(courses).map((course, index) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:border-blue-300"
                onClick={() => setSelectedCourse(course)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {course.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in overflow-y-auto" 
          onClick={() => setSelectedCourse(null)}
          data-lenis-prevent
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full my-4 sm:my-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-start justify-between rounded-t-2xl sm:rounded-t-3xl z-10">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <span className="text-4xl sm:text-5xl flex-shrink-0">{selectedCourse.icon}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-3xl font-bold text-gray-900 truncate">{selectedCourse.name}</h3>
                  <p className="text-sm sm:text-lg text-gray-600 line-clamp-2">{selectedCourse.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 ml-2"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto scrollbar-hide">
              {/* Overview */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Overview</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{selectedCourse.overview.description}</p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">What You'll Learn</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Career Opportunities</h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {selectedCourse.careers.slice(0, 4).map((career, idx) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-700 bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-sm sm:text-base">{career.title}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{career.salary}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    navigate('/quiz');
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <span className="truncate">Take Quiz to Get Personalized Roadmap</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-blue-100 text-sm">Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-100 text-sm">Career Paths</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90</div>
              <div className="text-blue-100 text-sm">Day Roadmaps</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">AI</div>
              <div className="text-blue-100 text-sm">Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to find your path?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands discovering their perfect tech career
          </p>
          <button
            onClick={() => navigate('/quiz')}
            className="group bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-10 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2"
          >
            Take the Quiz — It's Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-center border-t border-slate-800">
        <p className="text-slate-400 text-sm">© 2026 PathRight. All rights reserved.</p>
      </footer>
    </div>
  );
}
