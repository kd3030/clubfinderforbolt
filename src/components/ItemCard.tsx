import React from 'react';
import { MapPinIcon } from 'lucide-react';
interface ItemCardProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: string;
    inStock: boolean;
    location: string;
  };
  onClick: () => void;
}
export function ItemCard({
  item,
  onClick
}: ItemCardProps) {
  return <div onClick={onClick} className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
      <div className="p-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-800">{item.name}</h3>
          <span className="font-bold text-gray-800">{item.price}</span>
        </div>
        <div className="flex items-center mt-2">
          <MapPinIcon size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">{item.location}</span>
        </div>
        <div className="mt-2">
          <span className={`text-sm px-2 py-1 rounded-full ${item.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {item.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>;
}