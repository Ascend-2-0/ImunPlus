import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const ReservasiImunisasiPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(19);
  const [selectedTime, setSelectedTime] = useState('10.00');
  const [selectedVaccine, setSelectedVaccine] = useState('Vaksin Influenza');
  
  const [formData, setFormData] = useState({
    namaLengkap: '',
    alamat: '',
    nik: '',
    golonganDarah: '',
    tanggalLahir: '',
    jenisKelamin: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-8 mb-12">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
            currentStep >= step ? 'bg-red-400' : 'bg-gray-400'
          }`}>
            {step}
          </div>
          <span className={`ml-3 font-medium ${
            currentStep >= step ? 'text-red-400' : 'text-gray-400'
          }`}>
            {step === 1 && 'Data Pasien'}
            {step === 2 && 'Lokasi & Jadwal'}
            {step === 3 && 'Konfirmasi'}
          </span>
          {step < 3 && (
            <div className={`w-16 h-0.5 ml-8 ${
              currentStep > step ? 'bg-red-400' : 'bg-gray-400'
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="bg-slate-300 rounded-lg p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-700 mb-6">Data Pasien</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-slate-700 font-medium mb-2">Nama Lengkap Ibu</label>
          <input
            type="text"
            name="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700 placeholder-slate-600"
            placeholder="Masukkan nama lengkap"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700 placeholder-slate-600"
            placeholder="Masukkan alamat"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">NIK (Nomor Induk Kependudukan)</label>
          <input
            type="text"
            name="nik"
            value={formData.nik}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700 placeholder-slate-600"
            placeholder="Masukkan NIK"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Golongan Darah</label>
          <input
            type="text"
            name="golonganDarah"
            value={formData.golonganDarah}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700 placeholder-slate-600"
            placeholder="Masukkan golongan darah"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Tanggal Lahir</label>
          <input
            type="date"
            name="tanggalLahir"
            value={formData.tanggalLahir}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700"
          />
        </div>
        <div>
          <label className="block text-slate-700 font-medium mb-2">Jenis Kelamin</label>
          <select
            name="jenisKelamin"
            value={formData.jenisKelamin}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-red-300 border border-red-400 text-slate-700"
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          onClick={handleNext}
          className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Data Pasien Summary */}
        <div className="bg-slate-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-700 mb-6">Data Pasien</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Nama Lengkap Ibu</span>
              <span className="text-slate-600">Primadiyanti</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">NIK</span>
              <span className="text-slate-600">3521598234567855</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Tanggal Lahir</span>
              <span className="text-slate-600">12-12-1999</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Alamat</span>
              <span className="text-slate-600 text-right">Jl. Merdeka Timur No.125, Kec. Wulandoni, Kab. Lembata, Nusa Tenggara Timur (NTT)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Golongan Darah</span>
              <span className="text-slate-600">AB</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Jenis Kelamin</span>
              <span className="text-slate-600">Perempuan</span>
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <button
              onClick={handleBack}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Kembali
            </button>
          </div>
        </div>

        {/* Right Column - Ringkasan */}
        <div className="bg-slate-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-700 mb-6">Ringkasan</h3>
          <div className="space-y-4">
            <div>
              <span className="font-medium text-slate-700 block mb-2">Lokasi</span>
              <span className="text-slate-600">Posyandu Melati, Desa Lamalera A, Kec. Wulandoni, Kab. Lembata, Nusa Tenggara Timur (NTT)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Tanggal</span>
              <span className="text-slate-600">19 Mei 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Waktu</span>
              <span className="text-slate-600">10.00 WITA</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-700">Jenis Vaksin</span>
              <span className="text-slate-600">Influenza</span>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNext}
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-2 rounded-lg"
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600" size={20} />
          <input
            type="text"
            placeholder="Cari Posyandu / Klinik"
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-400 border border-slate-500 text-slate-700 placeholder-slate-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-pink-100 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <ChevronLeft className="text-slate-600 cursor-pointer" size={24} />
            <h3 className="text-xl font-bold text-slate-700">Mei 2025</h3>
            <ChevronRight className="text-slate-600 cursor-pointer" size={24} />
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day) => (
              <div key={day} className="text-center font-medium text-slate-700 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`p-2 text-center rounded ${
                  selectedDate === date 
                    ? 'bg-red-400 text-white' 
                    : 'hover:bg-red-200 text-slate-700'
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Time and Vaccine Selection */}
        <div className="space-y-6">
          {/* Time Selection */}
          <div>
            <h4 className="text-lg font-bold text-pink-200 mb-4">Pilih Jam</h4>
            <div className="grid grid-cols-2 gap-4">
              {['09:00', '10:00', '13:00', '14:00'].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-full border-2 ${
                    selectedTime === time
                      ? 'bg-slate-600 border-slate-600 text-white'
                      : 'bg-transparent border-slate-400 text-slate-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Vaccine Selection */}
          <div>
            <h4 className="text-lg font-bold text-pink-200 mb-4">Pilih Imunisasi</h4>
            <select
              value={selectedVaccine}
              onChange={(e) => setSelectedVaccine(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-400 border border-slate-500 text-slate-700"
            >
              <option value="Vaksin Influenza">Vaksin Influenza</option>
              <option value="Vaksin COVID-19">Vaksin COVID-19</option>
              <option value="Vaksin Hepatitis B">Vaksin Hepatitis B</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className=" py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-red-300 text-center mb-8">
            Reservasi Imunisasi
          </h1>
          {renderStepIndicator()}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep3()}
        {currentStep === 3 && renderStep2()}
      </div>
    </div>
  );
};

export default ReservasiImunisasiPage;