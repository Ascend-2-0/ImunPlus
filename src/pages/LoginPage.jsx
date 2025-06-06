import { useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">SELAMAT DATANG</h1>
    
        <div className="w-full max-w-md bg-gray-800/20 rounded-lg shadow-xl p-2 backdrop-blur-sm">
            <div className="bg-light-pink rounded-lg p-6 md:p-8">
            <LoginForm />
            </div>
        </div>
        </main>
    );
}

export default LoginPage;
