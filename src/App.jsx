import Navbar from './components/Navbar'
import RegistrationPage from './pages/RegistrationPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue">
      <Navbar />
      <RegistrationPage />
    </div>
  )
}

export default App