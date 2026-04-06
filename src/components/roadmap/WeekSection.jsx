import React from 'react';
import TaskItem from './TaskItem';

export default function WeekSection({ week, courseId, completedTasks, onToggleTask }) {
  return (
    <div className="mb-6 bg-gray-50 rounded-lg p-6">
      <div className="mb-4">
        <h4 className="text-lg font-bold text-gray-900 mb-1">Week {week.week}: {week.focus}</h4>
        <p className="text-sm text-gray-600">{week.daily}</p>
      </div>

      <div className="space-y-2 mb-4">
        {week.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            checked={completedTasks.includes(task.id)}
            onToggle={() => onToggleTask(courseId, task.id)}
          />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-900">Milestone:</p>
        <p className="text-sm text-gray-700">{week.milestone}</p>
      </div>
    </div>
  );
}
