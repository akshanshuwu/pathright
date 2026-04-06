import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const { quizCompleted, selectedCourse } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (quizCompleted) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            PathRight
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {quizCompleted ? (
              <>
                <Link
                  to="/results"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Results
                </Link>
                {selectedCourse && (
                  <Link
                    to={`/roadmap/${selectedCourse}`}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    Roadmap
                  </Link>
                )}
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <Link
                to="/quiz"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Take Quiz
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {quizCompleted ? (
                <>
                  <Link
                    to="/results"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 font-medium py-2"
                  >
                    Results
                  </Link>
                  {selectedCourse && (
                    <Link
                      to={`/roadmap/${selectedCourse}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-gray-900 font-medium py-2"
                    >
                      Roadmap
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-900 font-medium py-2"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <Link
                  to="/quiz"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                >
                  Take Quiz
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
