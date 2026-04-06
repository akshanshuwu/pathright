import React from 'react';

export default function WeeklyTasks({ tasks, onToggle }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">This Week's Tasks</h3>
      <div className="space-y-3">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="mt-1 w-4 h-4 text-blue-600 rounded"
              />
              <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                {task.text}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No tasks available</p>
        )}
      </div>
    </div>
  );
}
