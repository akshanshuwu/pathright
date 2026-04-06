import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // 300ms delay for smooth transition

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-pulse">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Skeleton Header */}
          <div className="mb-8">
            <div className="h-12 bg-gray-200 rounded-lg w-2/3 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-1/2"></div>
          </div>

          {/* Skeleton Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-4/6"></div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="h-8 bg-gray-200 rounded-lg w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
}
