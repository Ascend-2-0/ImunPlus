import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-blue">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App