import { Check } from 'lucide-react';

export default function QuizOption({ option, selected, onClick, type }) {
  return (
    <div
      onClick={onClick}
      className={`group border-2 rounded-xl p-5 cursor-pointer transition-all duration-200 ${
        selected 
          ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-4">
        {type === 'multi' && (
          <div className={`flex-shrink-0 w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all ${
            selected 
              ? 'bg-gradient-to-br from-blue-600 to-indigo-600 border-blue-600' 
              : 'border-gray-300 group-hover:border-blue-400'
          }`}>
            {selected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
          </div>
        )}
        {type === 'single' && (
          <div className={`flex-shrink-0 w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
            selected 
              ? 'border-blue-600' 
              : 'border-gray-300 group-hover:border-blue-400'
          }`}>
            {selected && <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600"></div>}
          </div>
        )}
        <span className={`text-base font-medium transition-colors ${
          selected ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          {option.label}
        </span>
      </div>
    </div>
  );
}
