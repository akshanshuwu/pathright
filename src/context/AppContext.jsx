import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Initialize state from localStorage
  const [quizAnswers, setQuizAnswers] = useState(() => {
    const saved = localStorage.getItem('pr_answers');
    return saved ? JSON.parse(saved) : null;
  });

  const [quizCompleted, setQuizCompleted] = useState(() => {
    const saved = localStorage.getItem('pr_completed');
    return saved ? JSON.parse(saved) : false;
  });

  const [aiResults, setAiResults] = useState(() => {
    const saved = localStorage.getItem('pr_ai_results');
    return saved ? JSON.parse(saved) : null;
  });

  const [selectedCourse, setSelectedCourseState] = useState(() => {
    const saved = localStorage.getItem('pr_selected');
    return saved ? JSON.parse(saved) : null;
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('pr_tasks');
    return saved ? JSON.parse(saved) : {};
  });

  // Action: Save quiz answers and mark quiz as completed
  const saveQuizAnswers = (answers) => {
    setQuizAnswers(answers);
    setQuizCompleted(true);
    localStorage.setItem('pr_answers', JSON.stringify(answers));
    localStorage.setItem('pr_completed', JSON.stringify(true));
  };

  // Action: Save AI results
  const saveAiResults = (results) => {
    setAiResults(results);
    localStorage.setItem('pr_ai_results', JSON.stringify(results));
  };

  // Action: Select a course
  const selectCourse = (courseId) => {
    setSelectedCourseState(courseId);
    localStorage.setItem('pr_selected', JSON.stringify(courseId));
  };

  // Action: Toggle a task completion
  const toggleTask = (courseId, taskId) => {
    setCompletedTasks((prev) => {
      const courseTasks = prev[courseId] || [];
      const newCourseTasks = courseTasks.includes(taskId)
        ? courseTasks.filter((id) => id !== taskId)
        : [...courseTasks, taskId];
      
      const newCompletedTasks = {
        ...prev,
        [courseId]: newCourseTasks
      };
      
      localStorage.setItem('pr_tasks', JSON.stringify(newCompletedTasks));
      return newCompletedTasks;
    });
  };

  // Action: Reset all state
  const resetAll = () => {
    setQuizAnswers(null);
    setQuizCompleted(false);
    setAiResults(null);
    setSelectedCourseState(null);
    setCompletedTasks({});
    
    localStorage.removeItem('pr_answers');
    localStorage.removeItem('pr_completed');
    localStorage.removeItem('pr_ai_results');
    localStorage.removeItem('pr_selected');
    localStorage.removeItem('pr_tasks');
  };

  const value = {
    quizAnswers,
    quizCompleted,
    aiResults,
    selectedCourse,
    completedTasks,
    saveQuizAnswers,
    saveAiResults,
    selectCourse,
    toggleTask,
    resetAll
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
