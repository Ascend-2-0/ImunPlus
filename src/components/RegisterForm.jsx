import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const RegisterForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { phoneNumber, password, confirmPassword });
  };

  const isPasswordValid = () => {
    const hasMinLength = password.length >= 5;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return hasMinLength && hasLetter && (hasChar || hasNumber);
  };

  const isPhoneValid = () => {
    return /^08[1-9][0-9]{7,10}$/.test(phoneNumber);
  };

  const doPasswordsMatch = () => {
    return password === confirmPassword && password !== '';
  };

  return (
    <div className="bg-pink-200 p-8 rounded-md shadow-md max-w-md w-full">
      <h2 className="text-center text-2xl font-bold mb-6">Daftar</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            Nomor Telepon
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-3 bg-red-300 bg-opacity-50 rounded border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            placeholder="Masukkan: 081x-xxx-xxx"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-red-300 bg-opacity-50 rounded border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              placeholder="Minimal 5 huruf, 1 karakter, dan 1 angka"
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Konfirmasi Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-red-300 bg-opacity-50 rounded border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
              placeholder="Ulangi password"
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-400 text-white py-2 px-12 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;