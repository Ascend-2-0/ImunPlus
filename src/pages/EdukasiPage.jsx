import { useState } from 'react';
import image13 from '../assets/image13.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';

const EdukasiPage = () => {
    // State untuk mengatur tab yang aktif (Video atau Artikel)
    const [activeTab, setActiveTab] = useState('video');

    // Data video edukasi
    const videoData = [
        {
            id: 1,
            title: "Pentingnya Imunisasi",
            description: "Penjelasan mengapa mengapa imunisasi itu penting",
            thumbnail: image13,
            link: "https://www.youtube.com/watch?v=Np2RMenVz1s&ab_channel=PemerintahKotaMadiun"
        },
        {
            id: 2,
            title: "Jadwal Imunisasi Yang Tepat",
            description: "Ikuti panduan imunisasi sesuai dengan yang dianjurkan",
            thumbnail: image11,
            link: "https://www.youtube.com/watch?v=ZVU_J5zkqHg&ab_channel=Halodoc"
        },
        {
            id: 3,
            title: "Imunisasi Untuk Ibu Hamil",
            description: "Ikuti panduan imunisasi sesuai dengan yang dianjurkan",
            thumbnail: image12,
            link: ""
        },
        {
            id: 4,
            title: "Pola Makan Untuk Ibu Hamil",
            description: "Perhatikan makanan apa saja yang tepat untuk ibu hamil",
            thumbnail: image10,
            link: "https://www.youtube.com/watch?v=_OmtCLyK_mw&ab_channel=Salsalivefit"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b">
            {/* Container utama dengan padding */}
            <div className="container mx-auto px-4 py-8">

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-slate-600 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'video'
                                    ? 'bg-slate-400 text-slate-900 shadow-md'
                                    : 'text-slate-200 hover:text-white'
                                }`}
                        >
                            Video
                        </button>
                        <button
                            onClick={() => setActiveTab('artikel')}
                            className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === 'artikel'
                                    ? 'bg-slate-400 text-slate-900 shadow-md'
                                    : 'text-slate-200 hover:text-white'
                                }`}
                        >
                            Artikel
                        </button>
                    </div>
                </div>


                {activeTab === 'video' && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-red-300 mb-6">
                            Video Edukasi
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Temukan informasi terkait imunisasi serta tips kesehatan
                            Ibu dan Anak melalui video di bawah ini.
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14">
                            {videoData.map((video) => (
                                <div
                                    key={video.id}
                                    className="bg-slate-300 bg-opacity-90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                >
                                    {/* Video Thumbnail */}
                                    <div className="bg-slate-400 rounded-xl h-48 mb-6 flex items-center justify-center">
                                        <img 
                                            src={video.thumbnail} 
                                            alt={video.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Video Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-slate-800">
                                            {video.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {video.description}
                                        </p>

                                        {/* Watch Button */}
                                        <div className="flex justify-end pt-2">
                                            <a href={video.link} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                                                Nonton
                                            </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Artikel Section (placeholder) */}
                {activeTab === 'artikel' && (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-slate-300 mb-4">
                            Artikel Edukasi
                        </h2>
                        <p className="text-slate-400">
                            Konten artikel akan ditampilkan di sini
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EdukasiPage;