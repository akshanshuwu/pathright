import React from 'react';

export default function ResourceCard({ resource }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold">
        {resource.name}
      </a>
      <div className="text-sm text-gray-600 mt-1">{resource.type}</div>
      {resource.cost && <div className="text-sm text-gray-900 font-semibold mt-1">{resource.cost}</div>}
      <p className="text-sm text-gray-600 mt-2">{resource.why}</p>
    </div>
  );
}
