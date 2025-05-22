import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import KartuImunisasiPage from './pages/KartuImunisasiPage'
import ImunisasiPage from './pages/ImunisasiPage'
import ReservasiPage from './pages/ReservasiImunisasiPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-blue">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/kartu-imunisasi" element={<KartuImunisasiPage />} />
          <Route path="/imunisasi" element={<ImunisasiPage />} />
          <Route path="/reservasi" element={<ReservasiPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App