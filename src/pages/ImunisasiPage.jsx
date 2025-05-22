import React from "react";
import image4 from "../assets/image4.png";
import VaccineCard from "../components/VaccineCard";
import VaccineTypes from "../components/VaccineTypes";

const ImunisasiPage = () => {
    return (
        <main className="flex-1">
            <div className="relative bg-[#ffe5e5] py-4">
                <div className="absolute inset-0 z-0">
                    <img
                        src={image4}
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#2b4162] mb-4">Layanan Imunisasi Ibu dan Anak</h1>
                        <p className="text-lg md:text-xl text-[#2b4162] mb-8">Membawa perlindungan hingga pelosok Tanah Air</p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-[#5dd9d5] text-[#2b4162] px-8 py-3 rounded-md font-medium hover:bg-[#4cc7c3] transition-colors">
                                Reservasi
                            </button>
                            <button className="bg-white text-[#2b4162] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                                Jadwal Imunisasi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#2b4162] py-16">
                <div className="container mx-auto px-4">

                    <VaccineTypes />
                </div>
            </div>
        </main>
    )
}

export default ImunisasiPage;
