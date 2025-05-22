import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-light-pink py-10 px-36 md:px-100 shadow-md">
      <div className="container mx-auto px-0 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 mb-4 md:mb-0">
            <span className="font-medium">© {year} IMUN+</span>
            <span className="mx-2 text-gray-500">|</span>
            <span className="text-gray-600">Dinas Kesehatan</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="/faq" className="text-blue-800 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="/kebijakan-privasi" className="text-blue-800 hover:text-blue-600 transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;