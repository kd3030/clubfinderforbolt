import React from 'react';
import { MapPinIcon } from 'lucide-react';
interface MapViewProps {
  item: any;
  onBack: () => void;
}
export function MapView({
  item,
  onBack
}: MapViewProps) {
  // Function to determine item position based on location
  const getItemPosition = (location: string) => {
    const positions: Record<string, {
      top: string;
      left: string;
    }> = {
      'Aisle 1': {
        top: '25%',
        left: '20%'
      },
      'Aisle 2': {
        top: '25%',
        left: '30%'
      },
      'Aisle 3': {
        top: '25%',
        left: '40%'
      },
      'Aisle 4': {
        top: '25%',
        left: '50%'
      },
      'Aisle 5': {
        top: '35%',
        left: '20%'
      },
      'Aisle 6': {
        top: '35%',
        left: '30%'
      },
      'Aisle 7': {
        top: '35%',
        left: '40%'
      },
      'Aisle 8': {
        top: '35%',
        left: '50%'
      },
      'Aisle 9': {
        top: '45%',
        left: '20%'
      },
      'Aisle 10': {
        top: '45%',
        left: '30%'
      },
      'Aisle 11': {
        top: '45%',
        left: '40%'
      },
      'Aisle 12': {
        top: '45%',
        left: '50%'
      },
      'Aisle 13': {
        top: '55%',
        left: '20%'
      },
      'Aisle 14': {
        top: '55%',
        left: '30%'
      },
      Bakery: {
        top: '15%',
        left: '75%'
      },
      Pharmacy: {
        top: '65%',
        left: '75%'
      },
      Electronics: {
        top: '75%',
        left: '40%'
      },
      Clothing: {
        top: '65%',
        left: '30%'
      }
    };
    return positions[location] || {
      top: '50%',
      left: '50%'
    };
  };
  // Get position for the current item
  const itemPosition = item ? getItemPosition(item.location) : {
    top: '0',
    left: '0'
  };
  return <div className="relative h-full">
      <div className="bg-blue-50 p-2 sm:p-4 h-full overflow-auto">
        <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 relative">
          {/* Instructions for mobile users */}
          <div className="mb-2 text-sm text-gray-600 bg-blue-50 p-2 rounded-md md:hidden">
            <p>Pinch to zoom and drag to navigate the store map</p>
          </div>
          {/* Store map container with responsive scaling */}
          <div className="overflow-auto relative">
            {/* The map with original dimensions but scaled */}
            <div className="relative border-2 border-gray-300 rounded-md bg-gray-50 origin-top-left transform scale-[0.4] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 min-h-[640px] sm:min-h-0" style={{
            width: '1200px',
            height: '1600px',
            transformOrigin: 'top left'
          }}>
              {/* Entrance/Exit */}
              <div className="absolute top-0 left-0 w-1/4 h-16 bg-blue-200 border border-blue-300 flex items-center justify-center font-bold">
                ENTRANCE/EXIT
              </div>
              {/* Membership */}
              <div className="absolute top-0 right-0 w-1/4 h-16 bg-blue-200 border border-blue-300 flex items-center justify-center font-bold">
                MEMBERSHIP
              </div>
              {/* Checkout lanes */}
              <div className="absolute top-16 left-0 w-full h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold">
                CHECKOUT LANES
              </div>
              {/* Main shopping area */}
              <div className="absolute top-40 left-0 w-full h-[calc(100%-40px)]">
                {/* Left side - Main aisles */}
                <div className="absolute top-0 left-0 w-2/3 h-full">
                  {/* Aisle headers */}
                  <div className="absolute top-0 left-0 w-full h-12 flex">
                    <div className="w-1/4 h-full bg-yellow-100 border border-yellow-200 flex items-center justify-center font-semibold">
                      AISLE 1-4
                    </div>
                    <div className="w-1/4 h-full bg-yellow-100 border border-yellow-200 flex items-center justify-center font-semibold">
                      AISLE 5-8
                    </div>
                    <div className="w-1/4 h-full bg-yellow-100 border border-yellow-200 flex items-center justify-center font-semibold">
                      AISLE 9-12
                    </div>
                    <div className="w-1/4 h-full bg-yellow-100 border border-yellow-200 flex items-center justify-center font-semibold">
                      AISLE 13-14
                    </div>
                  </div>
                  {/* Aisle 1-4 - Grocery */}
                  <div className="absolute top-12 left-0 w-1/4 h-[calc(100%-12px)]">
                    <div className="w-full h-1/4 bg-green-100 border border-green-200 flex items-center justify-center">
                      Aisle 1<br />
                      Snacks
                    </div>
                    <div className="w-full h-1/4 bg-green-100 border border-green-200 flex items-center justify-center">
                      Aisle 2<br />
                      Beverages
                    </div>
                    <div className="w-full h-1/4 bg-green-100 border border-green-200 flex items-center justify-center">
                      Aisle 3<br />
                      Canned Goods
                    </div>
                    <div className="w-full h-1/4 bg-green-100 border border-green-200 flex items-center justify-center">
                      Aisle 4<br />
                      Pasta & Rice
                    </div>
                  </div>
                  {/* Aisle 5-8 - Household */}
                  <div className="absolute top-12 left-1/4 w-1/4 h-[calc(100%-12px)]">
                    <div className="w-full h-1/4 bg-blue-100 border border-blue-200 flex items-center justify-center">
                      Aisle 5<br />
                      Paper Products
                      <div className="flex flex-col items-center ml-2">
                        <img src="/Screenshot_2025-08-24_at_11.57.26_AM.png" alt="Chex Mix Variety Pack" className="h-16 w-auto" />
                        <span className="text-xs italic text-gray-500">
                          sponsored
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1/4 bg-blue-100 border border-blue-200 flex items-center justify-center">
                      Aisle 6<br />
                      Cleaning
                    </div>
                    <div className="w-full h-1/4 bg-blue-100 border border-blue-200 flex items-center justify-center">
                      Aisle 7<br />
                      Pet Supplies
                      <div className="flex flex-col items-center ml-2">
                        <img src="/Screenshot_2025-08-24_at_12.00.08_PM.png" alt="Goldfish Crackers" className="h-14 w-auto" />
                        <span className="text-xs italic text-gray-500">
                          sponsored
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1/4 bg-blue-100 border border-blue-200 flex items-center justify-center">
                      Aisle 8<br />
                      Home Goods
                    </div>
                  </div>
                  {/* Aisle 9-12 - Fresh & Frozen */}
                  <div className="absolute top-12 left-2/4 w-1/4 h-[calc(100%-12px)]">
                    <div className="w-full h-1/4 bg-purple-100 border border-purple-200 flex items-center justify-center">
                      Aisle 9<br />
                      Dairy
                    </div>
                    <div className="w-full h-1/4 bg-purple-100 border border-purple-200 flex items-center justify-center">
                      Aisle 10
                      <br />
                      Meat
                    </div>
                    <div className="w-full h-1/4 bg-purple-100 border border-purple-200 flex items-center justify-center">
                      Aisle 11
                      <br />
                      Produce
                    </div>
                    <div className="w-full h-1/4 bg-purple-100 border border-purple-200 flex items-center justify-center">
                      Aisle 12
                      <br />
                      Pistachios
                      <img src="/Screenshot_2025-08-24_at_11.09.53_AM.png" alt="Wonderful Pistachios" className="h-12 w-auto ml-2" />
                    </div>
                  </div>
                  {/* Aisle 13-14 - Seasonal & Clothing */}
                  <div className="absolute top-12 left-3/4 w-1/4 h-[calc(100%-12px)]">
                    <div className="w-full h-1/2 bg-orange-100 border border-orange-200 flex items-center justify-center">
                      Aisle 13
                      <br />
                      Seasonal
                    </div>
                    <div className="w-full h-1/2 bg-orange-100 border border-orange-200 flex items-center justify-center">
                      Aisle 14
                      <br />
                      Books & Office
                    </div>
                  </div>
                </div>
                {/* Right side - Specialty areas */}
                <div className="absolute top-0 right-0 w-1/3 h-full">
                  <div className="w-full h-1/5 bg-red-100 border border-red-200 flex items-center justify-center font-semibold">
                    BAKERY
                  </div>
                  <div className="w-full h-1/5 bg-pink-100 border border-pink-200 flex items-center justify-center font-semibold">
                    DELI
                  </div>
                  <div className="w-full h-1/5 bg-purple-100 border border-purple-200 flex items-center justify-center font-semibold">
                    PHARMACY
                  </div>
                  <div className="w-full h-1/5 bg-blue-100 border border-blue-200 flex items-center justify-center font-semibold">
                    ELECTRONICS
                  </div>
                  <div className="w-full h-1/5 bg-green-100 border border-green-200 flex items-center justify-center font-semibold">
                    CLOTHING
                  </div>
                </div>
              </div>
              {/* Cafe/Food Court */}
              <div className="absolute bottom-0 right-0 w-1/4 h-16 bg-yellow-200 border border-yellow-300 flex items-center justify-center font-bold">
                CAFE / FOOD COURT
              </div>
              {/* Item location pin */}
              {item && <div className="absolute flex flex-col items-center z-10" style={{
              top: itemPosition.top,
              left: itemPosition.left,
              transform: 'translate(-50%, -50%)'
            }}>
                  <MapPinIcon size={40} className="text-red-500 animate-bounce" />
                  <div className="bg-white px-3 py-1.5 rounded-md shadow-lg text-sm font-medium border-2 border-red-500">
                    {item.name}
                  </div>
                </div>}
              {/* You are here marker */}
              <div className="absolute flex flex-col items-center z-10" style={{
              top: '8%',
              left: '12%',
              transform: 'translate(-50%, -50%)'
            }}>
                <div className="h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="bg-blue-600 text-white px-2 py-0.5 rounded-md shadow-md text-xs font-medium mt-1">
                  You are here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Item info overlay - made more mobile-friendly */}
      {item && <div className="absolute bottom-0 left-0 right-0 bg-white p-3 shadow-lg rounded-t-xl">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md mr-3" />
            <div>
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                {item.name}
              </h3>
              <div className="flex items-center">
                <MapPinIcon size={14} className="text-gray-500 mr-1" />
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.location}
                </span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${item.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>}
    </div>;
}