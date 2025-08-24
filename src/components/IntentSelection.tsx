import React from 'react';
interface IntentSelectionProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  onClick: () => void;
}
export function IntentSelection({
  title,
  icon,
  colorClass,
  onClick
}: IntentSelectionProps) {
  return <button onClick={onClick} className="flex items-center p-4 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className={`${colorClass} p-3 rounded-full mr-4`}>{icon}</div>
      <span className="text-left text-lg font-medium text-gray-800">
        {title}
      </span>
    </button>;
}