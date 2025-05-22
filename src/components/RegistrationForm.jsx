import { useState } from 'react'
import InputField from './InputField'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear errors when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    // Validate phone
    if (!formData.phone) {
      newErrors.phone = 'Nomor telepon harus diisi'
    } else if (!/^08[1-9][0-9]{8,10}$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid'
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password harus diisi'
    } else if (!/^(?=.*[A-Za-z])(?=.*\d).{5,}$/.test(formData.password)) {
      newErrors.password = 'Password minimal 5 huruf dan harus mengandung huruf dan angka'
    }
    
    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData)
      alert('Pendaftaran berhasil!')
      
      // Reset form after submission
      setFormData({
        phone: '',
        password: '',
        confirmPassword: ''
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center text-dark-blue mb-6">Daftar</h2>
      
      <div className="space-y-4">
        <InputField 
          label="Nomor Telepon"
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Masukkan 081x-xxx-xxx"
          onChange={handleChange}
          error={errors.phone}
        />
        
        <InputField 
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          placeholder="Minimal 5 huruf, 1 karakter, dan 1 angka"
          onChange={handleChange}
          error={errors.password}
          showPasswordToggle
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        
        <InputField 
          label="Konfirmasi Password"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Ulangi password"
          onChange={handleChange}
          error={errors.confirmPassword}
          showPasswordToggle
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />
      </div>
      
      <div className="mt-8 flex justify-center">
        <button 
          type="submit" 
          className="btn-primary w-full max-w-[200px]"
        >
          Daftar
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm