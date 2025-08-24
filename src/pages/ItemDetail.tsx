import React from 'react';
import { MapPinIcon, MapIcon } from 'lucide-react';
import { SubstituteCard } from '../components/SubstituteCard';
interface ItemDetailProps {
  item: any;
  onBack: () => void;
  onViewMap: () => void;
}
export function ItemDetail({
  item,
  onBack,
  onViewMap
}: ItemDetailProps) {
  if (!item) return null;
  return <div className="p-4">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
            <span className="font-bold text-xl text-gray-800">
              {item.price}
            </span>
          </div>
          <div className="flex items-center mb-3">
            <MapPinIcon size={18} className="text-gray-500 mr-1" />
            <span className="text-gray-500">{item.location}</span>
          </div>
          <div className="mb-4">
            <span className={`px-3 py-1 rounded-full ${item.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <button onClick={onViewMap} className="w-full flex justify-center items-center bg-blue-600 text-white px-4 py-3 rounded-lg">
            <MapIcon size={18} className="mr-2" />
            Find in Store
          </button>
        </div>
      </div>
      {!item.inStock && item.substitutes && item.substitutes.length > 0 && <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Recommended Substitutes
          </h2>
          <div className="grid gap-3">
            {item.substitutes.map((substitute: any) => <SubstituteCard key={substitute.id} item={substitute} />)}
          </div>
        </div>}
    </div>;
}