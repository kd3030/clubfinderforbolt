import React from 'react';
import { MapPinIcon } from 'lucide-react';
interface SubstituteCardProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: string;
    inStock: boolean;
    location: string;
  };
}
export function SubstituteCard({
  item
}: SubstituteCardProps) {
  return <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
      <div className="p-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800">{item.name}</h3>
          <span className="font-bold text-gray-800">{item.price}</span>
        </div>
        <div className="flex items-center mt-1">
          <MapPinIcon size={14} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">{item.location}</span>
        </div>
        <div className="mt-1">
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
            In Stock
          </span>
        </div>
      </div>
    </div>;
}