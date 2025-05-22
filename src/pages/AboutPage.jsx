import React from "react";

const AboutPage = () => {
    return (
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
            <div className="flex items-center justify-center p-4">
                <div className="bg-light-pink w-[1260px] h-[506px] left-[90px] top-[290px] rounded-[73px] p-6 md:p-8 justify-center items-center">
                    <h1 className="flex items-center justify-center text-3xl md:text-5xl font-poppins font-bold text-dark-blue mb-8 pt-8">Apa itu Imun+?</h1>
                    <p className="text-gray-700 font-poppins py-10 text-xl text-justify px-10">
                        IMUN+ adalah aplikasi yang dirancang untuk memudahkan masyarakat dalam mengakses informasi terkait imunisasi.
                        Dengan fitur-fitur yang lengkap dan antarmuka yang ramah pengguna, IMUN+ bertujuan untuk meningkatkan kesadaran
                        dan partisipasi masyarakat dalam program imunisasi.
                    </p>
                </div>
            </div>
        </main>
    );
}
export default AboutPage;