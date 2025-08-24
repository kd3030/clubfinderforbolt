import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { ItemDetail } from './pages/ItemDetail';
import { Header } from './components/Header';
import { MapView } from './pages/MapView';
export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  // Mock notification on app entry (would be triggered by geofence in real app)
  useEffect(() => {
    setTimeout(() => {
      alert('Welcome to the club! What brings you in today?');
    }, 1000);
  }, []);
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onIntentSelect={() => setCurrentPage('search')} />;
      case 'search':
        return <Search searchQuery={searchQuery} onItemSelect={item => {
          setSelectedItem(item);
          setCurrentPage('itemDetail');
        }} onViewMap={() => setCurrentPage('map')} />;
      case 'itemDetail':
        return <ItemDetail item={selectedItem} onBack={() => setCurrentPage('search')} onViewMap={() => setCurrentPage('map')} />;
      case 'map':
        return <MapView item={selectedItem} onBack={() => selectedItem ? setCurrentPage('itemDetail') : setCurrentPage('search')} />;
      default:
        return <Home onIntentSelect={() => setCurrentPage('search')} />;
    }
  };
  return <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onSearch={query => {
      setSearchQuery(query);
      setCurrentPage('search');
    }} onHome={() => setCurrentPage('home')} />
      <main className="flex-1 overflow-auto pb-16">{renderPage()}</main>
    </div>;
}