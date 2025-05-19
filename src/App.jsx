import Navbar from './components/Navbar'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue">
      <Navbar />
      <RegistrationPage />
    </div>
  )
}

export default App