import React from 'react';
import image1 from '../assets/image1.jpeg';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-b from-slate-700 to-slate-800 h-auto flex items-center">
        <div className="absolute inset-0 bg-slate-800 bg-opacity-60"></div>
        
        <div className="absolute inset-0">
          <img 
            src={image1}
            alt="Medical professionals" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 container mx-auto py-40 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            SELAMAT DATANG DI
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-wider">
            IMUN+
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl mx-auto">
            Imunisasi cepat dan tepat di daerah 3T
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-12">
            (Tertinggal, Terdepan, Terluar)
          </p>
          
        </div>
      </section>
      
      <section className="my-1 pt-36 mb-60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            <a href="/imunisasi">
            <div className="group">
              <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="text-lg">Imunisasi</span>
              </button>
            </div>
            </a>
            
            <a href="/reservasi">
            <div className="group">
              <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="text-lg">Reservasi</span>
              </button>
            </div>
            </a>
            
            <div className="group">
                <a href="/kartu-imunisasi">
                    <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <span className="text-lg">Kartu Imunisasi</span>
                    </button>
                </a>
            </div>
            
            <div className="group">
                <a href="/edukasi">
                    <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <span className="text-lg">Edukasi</span>
                    </button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;