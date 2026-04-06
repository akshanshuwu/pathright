import React from 'react';
import WeekSection from './WeekSection';

export default function PhaseBlock({ phase, phaseNumber, courseId, completedTasks, onToggleTask }) {
  const phaseColors = {
    1: 'bg-amber-600',
    2: 'bg-blue-600',
    3: 'bg-green-600'
  };

  return (
    <div className="mb-8">
      <div className={`${phaseColors[phaseNumber]} text-white p-6 rounded-t-xl`}>
        <h3 className="text-2xl font-bold mb-2">Phase {phaseNumber}: {phase.title}</h3>
        <p className="text-white opacity-90">{phase.theme}</p>
      </div>
      <div className="bg-white p-6 rounded-b-xl border-x border-b border-gray-200">
        {phase.weeks.map((week) => (
          <WeekSection
            key={week.week}
            week={week}
            courseId={courseId}
            completedTasks={completedTasks}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </div>
  );
}
