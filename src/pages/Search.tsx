import React, { useEffect, useState } from 'react';
import { ItemCard } from '../components/ItemCard';
import { MapIcon } from 'lucide-react';
interface SearchProps {
  searchQuery: string;
  onItemSelect: (item: any) => void;
  onViewMap: () => void;
}
export function Search({
  searchQuery,
  onItemSelect,
  onViewMap
}: SearchProps) {
  // Mock data - in a real app this would come from an API
  const [items, setItems] = useState([{
    id: 1,
    name: 'Goldfish Crackers',
    image: "/Screenshot_2025-08-24_at_12.00.08_PM.png",
    price: '$8.99',
    inStock: false,
    location: 'Aisle 7',
    substitutes: [{
      id: 11,
      name: 'Cheez-It Crackers',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      price: '$7.99',
      inStock: true,
      location: 'Aisle 7'
    }]
  }, {
    id: 2,
    name: 'Pistachios',
    image: 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: '$15.99',
    inStock: true,
    location: 'Aisle 12',
    substitutes: []
  }, {
    id: 3,
    name: 'Paper Towels',
    image: 'https://images.unsplash.com/photo-1583251633146-d0c6c036187d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    price: '$19.99',
    inStock: true,
    location: 'Aisle 5',
    substitutes: []
  }]);
  // Filter items based on search query
  const filteredItems = searchQuery ? items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) : items;
  return <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          {searchQuery ? `Results for "${searchQuery}"` : 'All Items'}
        </h1>
        <button onClick={onViewMap} className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
          <MapIcon size={16} className="mr-1" />
          View Map
        </button>
      </div>
      <div className="grid gap-4">
        {filteredItems.length > 0 ? filteredItems.map(item => <ItemCard key={item.id} item={item} onClick={() => onItemSelect(item)} />) : <div className="text-center py-8 text-gray-500">
            No items found matching "{searchQuery}"
          </div>}
      </div>
    </div>;
}