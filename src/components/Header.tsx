import React, { useState } from 'react';
import { HomeIcon, SearchIcon, ArrowLeftIcon } from 'lucide-react';
interface HeaderProps {
  currentPage: string;
  onSearch: (query: string) => void;
  onHome: () => void;
}
export function Header({
  currentPage,
  onSearch,
  onHome
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };
  return <header className="sticky top-0 z-10 bg-blue-600 text-white shadow-md">
      <div className="px-4 py-3 flex items-center justify-between">
        {currentPage !== 'home' ? <button onClick={onHome} className="p-2 rounded-full hover:bg-blue-700" aria-label="Go home">
            {currentPage === 'search' || currentPage === 'itemDetail' || currentPage === 'map' ? <ArrowLeftIcon size={24} /> : <HomeIcon size={24} />}
          </button> : <div className="text-xl font-bold">Club Item Finder</div>}
        <form onSubmit={handleSearch} className="flex-1 mx-3">
          <div className="relative">
            <input type="text" placeholder="Search for items..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full py-2 px-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" aria-label="Search">
              <SearchIcon size={20} />
            </button>
          </div>
        </form>
      </div>
    </header>;
}