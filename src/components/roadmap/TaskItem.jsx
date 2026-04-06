import React from 'react';

export default function TaskItem({ task, checked, onToggle }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mt-1 w-4 h-4 text-blue-600 rounded"
      />
      <span className={`flex-1 ${checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {task.text}
      </span>
    </div>
  );
}
