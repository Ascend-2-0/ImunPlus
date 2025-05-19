import { useState } from 'react'

const Navbar = () => {
  const [activeLang, setActiveLang] = useState('id')

  return (
    <header className="bg-light-pink py-4 px-6 md:px-12 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl md:text-2xl text-dark-blue">
          Logo
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#" className="nav-link hidden md:block">Home</a>
          <a href="#" className="nav-link hidden md:block">Tentang</a>
          <a href="#" className="nav-link">Masuk</a>
          
          <div className="flex items-center space-x-2 ml-2">
            <button 
              onClick={() => setActiveLang('id')}
              className={`w-8 h-8 rounded-full overflow-hidden border-2 ${activeLang === 'id' ? 'border-button-pink' : 'border-transparent'}`}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" alt="Indonesia" className="w-full h-full object-cover" />
            </button>
            
            <button 
              onClick={() => setActiveLang('en')}
              className={`w-8 h-8 rounded-full overflow-hidden border-2 ${activeLang === 'en' ? 'border-button-pink' : 'border-transparent'}`}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="English" className="w-full h-full object-cover" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar