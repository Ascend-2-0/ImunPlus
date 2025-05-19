import React from 'react';
import { Shield } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="bg-pink-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          <span className="text-lg font-bold">(Logo imun+)</span>
        </div>
        
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-blue-800 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-800 transition duration-300">Tentang</a></li>
            <li>
              <a 
                href="#" 
                className="bg-blue-900 text-white py-2 px-6 rounded-b-lg hover:bg-blue-800 transition duration-300"
              >
                Masuk
              </a>
            </li>
          </ul>
        </nav>
        
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;