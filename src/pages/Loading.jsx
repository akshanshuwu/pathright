import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getRecommendations } from '../utils/gemini';

export default function Loading() {
  const navigate = useNavigate();
  const { quizAnswers, saveAiResults } = useAppContext();
  const [error, setError] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Reading your background...',
    'Assessing your skills...',
    'Matching your goals...',
    'Preparing your recommendations...'
  ];

  useEffect(() => {
    // Rotate messages every 2 seconds
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const run = async () => {
      try {
        const result = await getRecommendations(quizAnswers);
        saveAiResults(result);
        navigate('/results');
      } catch (e) {
        setError(e.message || 'Failed to get recommendations. Please try again.');
      }
    };

    if (quizAnswers) {
      run();
    }
  }, [quizAnswers, saveAiResults, navigate]);

  const handleRetry = () => {
    setError(null);
    window.location.reload();
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 text-center">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Analyzing your profile...</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Our AI is reading your answers and finding your best course matches. This takes about 10 seconds.
        </p>
        <p className="text-blue-600 font-medium animate-pulse">
          {messages[messageIndex]}
        </p>
      </div>
    </div>
  );
}
