import { useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [activeLang, setActiveLang] = useState('id')

  return (
    <header className="bg-light-pink my-10 py-5 px-36 md:px-100 shadow-md">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-16" />
        
        <nav className="flex items-center space-x-9">
          <a href="/" className="text-2xl nav-link hidden md:block">Home</a>
          <a href="/about" className="text-2xl nav-link hidden md:block">Tentang</a>
          <a href="/login" className="text-2xl nav-link">Masuk</a>

          <div className="flex items-center space-x-5 ml-2">
            <button 
              onClick={() => setActiveLang('id')}
              className={`w-10 h-10 rounded-full overflow-hidden border-2 ${activeLang === 'id' ? 'border-button-pink' : 'border-transparent'}`}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" alt="Indonesia" className="w-full h-full object-cover" />
            </button>
            
            <button 
              onClick={() => setActiveLang('en')}
              className={`w-10 h-10 rounded-full overflow-hidden border-2 ${activeLang === 'en' ? 'border-button-pink' : 'border-transparent'}`}
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