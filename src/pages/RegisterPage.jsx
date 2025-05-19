import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold text-white mb-8">SELAMAT DATANG</h1>
        
        <div className="bg-blue-800 bg-opacity-30 p-6 rounded-lg shadow-lg">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;