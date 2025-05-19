import React from 'react';

const LanguageSwitcher = () => {
  return (
    <div className="flex items-center space-x-2">
      <button 
        className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition duration-300"
        aria-label="Bahasa Indonesia"
      >
        <div className="bg-red-500 h-1/2 w-full"></div>
        <div className="bg-white h-1/2 w-full"></div>
      </button>
      
      <button 
        className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition duration-300"
        aria-label="English"
      >
        <div className="flex items-center justify-center w-full h-full bg-blue-800">
          <div className="text-white text-xs font-bold">EN</div>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;