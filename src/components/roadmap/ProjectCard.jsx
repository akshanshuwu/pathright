import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h4 className="font-bold text-gray-900 mb-2">Project {project.id}: {project.name}</h4>
      <p className="text-gray-700 mb-3">{project.what}</p>
      <div className="space-y-2 text-sm">
        <div><span className="font-semibold text-gray-900">Skills:</span> <span className="text-gray-600">{project.skills}</span></div>
        <div><span className="font-semibold text-gray-900">Time:</span> <span className="text-gray-600">{project.time}</span></div>
        <div><span className="font-semibold text-gray-900">Phase:</span> <span className="text-gray-600">{project.phase}</span></div>
      </div>
    </div>
  );
}
