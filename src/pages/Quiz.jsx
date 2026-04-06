import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { quizQuestions } from '../data/quizQuestions';
import QuizProgress from '../components/quiz/QuizProgress';
import QuizOption from '../components/quiz/QuizOption';

export default function Quiz() {
  const navigate = useNavigate();
  const { saveQuizAnswers } = useAppContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = quizQuestions[currentStep];
  const currentAnswer = answers[currentQuestion.id];
  const isAnswered = currentQuestion.type === 'multi' 
    ? currentAnswer && currentAnswer.length > 0
    : currentAnswer !== undefined;

  const handleOptionClick = (optionValue) => {
    if (currentQuestion.type === 'single') {
      setAnswers({
        ...answers,
        [currentQuestion.id]: optionValue
      });
    } else {
      // Multi-select
      const current = answers[currentQuestion.id] || [];
      const newValue = current.includes(optionValue)
        ? current.filter(v => v !== optionValue)
        : [...current, optionValue];
      setAnswers({
        ...answers,
        [currentQuestion.id]: newValue
      });
    }
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz completed
      saveQuizAnswers(answers);
      navigate('/loading');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isSelected = (optionValue) => {
    if (currentQuestion.type === 'single') {
      return currentAnswer === optionValue;
    } else {
      return currentAnswer && currentAnswer.includes(optionValue);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <QuizProgress current={currentStep + 1} total={quizQuestions.length} />

        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-900 mb-6 font-medium"
            >
              ← Back
            </button>
          )}

          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => (
              <QuizOption
                key={option.value}
                option={option}
                selected={isSelected(option.value)}
                onClick={() => handleOptionClick(option.value)}
                type={currentQuestion.type}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-colors ${
              isAnswered
                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                : 'bg-gray-300 cursor-not-allowed opacity-50'
            }`}
          >
            {currentStep < quizQuestions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}
