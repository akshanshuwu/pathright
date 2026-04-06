import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { courses } from '../data/courses';
import ProgressWidget from '../components/dashboard/ProgressWidget';
import WeeklyTasks from '../components/dashboard/WeeklyTasks';

export default function Dashboard() {
  const navigate = useNavigate();
  const { selectedCourse, completedTasks, aiResults, toggleTask, resetAll } = useAppContext();

  const course = selectedCourse ? courses[selectedCourse] : null;
  const courseTasks = selectedCourse ? (completedTasks[selectedCourse] || []) : [];

  // Calculate total tasks
  const totalTasks = course ? Object.values(course.roadmap).reduce((total, phase) => {
    return total + phase.weeks.reduce((weekTotal, week) => {
      return weekTotal + week.tasks.length;
    }, 0);
  }, 0) : 0;

  // Determine current phase based on completed tasks
  const getCurrentPhase = () => {
    if (!course) return null;
    const percentage = (courseTasks.length / totalTasks) * 100;
    if (percentage < 33) return 'Phase 1: ' + course.roadmap.phase1.title;
    if (percentage < 66) return 'Phase 2: ' + course.roadmap.phase2.title;
    return 'Phase 3: ' + course.roadmap.phase3.title;
  };

  // Get next uncompleted tasks
  const getWeeklyTasks = () => {
    if (!course) return [];
    const allTasks = [];
    
    Object.values(course.roadmap).forEach(phase => {
      phase.weeks.forEach(week => {
        week.tasks.forEach(task => {
          allTasks.push({
            id: task.id,
            text: task.text,
            completed: courseTasks.includes(task.id)
          });
        });
      });
    });

    // Get next 5 uncompleted tasks
    return allTasks.filter(task => !task.completed).slice(0, 5);
  };

  const handleRetake = () => {
    if (window.confirm('Are you sure you want to retake the quiz? This will reset all your progress.')) {
      resetAll();
      navigate('/quiz');
    }
  };

  if (!selectedCourse) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Learning Dashboard</h1>
            <p className="text-gray-600 mb-8">
              You have not selected a course yet. Take the quiz to get started.
            </p>
            <button
              onClick={() => navigate('/quiz')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Take the Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Learning Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{course.icon}</span>
            <span className="text-xl text-gray-600">{course.name}</span>
          </div>
        </div>

        {/* Course Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{course.icon}</span>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h2>
              <p className="text-gray-600 mb-4">{course.tagline}</p>
              <button
                onClick={() => navigate(`/roadmap/${selectedCourse}`)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Continue Roadmap
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Progress Widget */}
          <ProgressWidget
            completedCount={courseTasks.length}
            totalCount={totalTasks}
            currentPhase={getCurrentPhase()}
          />

          {/* This Week */}
          <WeeklyTasks
            tasks={getWeeklyTasks()}
            onToggle={(taskId) => toggleTask(selectedCourse, taskId)}
          />
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            {aiResults && (
              <button
                onClick={() => navigate('/results')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Browse All Courses
              </button>
            )}
            <button
              onClick={() => navigate(`/roadmap/${selectedCourse}`)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              View Full Roadmap
            </button>
            <button
              onClick={handleRetake}
              className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
