import React from 'react';

const KartuImunisasiPage = () => {
  return (
    <div className="flex-1 flex flex-col px-4 py-10">
      {/* Header Section */}
      <div className="bg-light-pink -mx-4 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-700 text-center">
            Kartu Imunisasi
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            <table className="table-fixed bg-red-300 rounded-lg shadow-lg overflow-hidden border-2 border-red-400">
                <tr>
                    <td class="border border-gray-500 font-poppins font-bold text-center">Nama</td>
                    <td class="border border-gray-500 font-poppins text-center">Primadayanti</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 font-poppins font-bold text-center">Tanggal Lahir</td>
                    <td class="border border-gray-500 font-poppins text-center">12 Maret 2023</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 font-poppins font-bold text-center">Umur</td>
                    <td class="border border-gray-500 font-poppins text-center">26 Tahun 0 Bulan</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 font-poppins font-bold text-center px-24">Alamat</td>
                    <td class="border border-gray-500 font-poppins text-center">Desa Lamalera A, Kec. Wulandoni, Kab. Lembata, Nusa Tenggara Timur (NTT)</td>
                </tr>
                <tr>
                    <td class="border border-gray-500 font-poppins font-bold text-center">No. HP</td>
                    <td class="border border-gray-500 font-poppins text-center">08123456789</td>
                </tr>       
            </table>

            {/* Right Card - Vaccination Information */}
            <div className="bg-red-300 rounded-lg shadow-lg p-8 border-2 border-red-400 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-slate-700 mb-6">
                Vaksin Influenza
              </h2>
              
              <div className="mb-6">
                <div className="text-slate-700 text-lg font-semibold mb-2">Posyandu Melati</div>
                <div className="text-slate-600 text-base">Desa Lamalera A,</div>
                <div className="text-slate-600 text-base">Kec. Wulandoni, Kab. Lembata, Nusa</div>
                <div className="text-slate-600 text-base">Tenggara Timur (NTT)</div>
              </div>

              <button className="bg-white hover:bg-gray-100 text-slate-700 font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200 border border-slate-300">
                Cek Detail
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KartuImunisasiPage;