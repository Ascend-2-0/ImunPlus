import { useState } from 'react';
import InputField from './InputField';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { phoneNumber, password });
  };

  const isPhoneValid = () => {
    return /^08[1-9][0-9]{7,10}$/.test(phoneNumber);
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-6">Masuk</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nomor Telepon"
          type="tel"
          name="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Masukkan: 081x-xxx-xxx"
          error={phoneNumber && !isPhoneValid() ? "Nomor telepon tidak valid" : ""}
        />

        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan Password"
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-400 text-white py-2 px-12 rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
            disabled={!isPhoneValid()}
          >
            Masuk
          </button>
        </div>
      </form>
      
      <p className="text-center text-sm mt-4">
        Belum punya akun?{" "}
        <a href="/register" className="text-red-500 font-semibold">
          Daftar
        </a>
      </p>
    </div>
  );
}

export default LoginForm;