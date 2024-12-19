import React from 'react';
import Sidebar from '../components/Sidebar';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-[300px] h-auto md:h-full bg-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
          </div>

          {/* Notifications and Avatar */}
          <div className="flex items-center gap-4">
            <i className="fas fa-bell text-gray-400"></i>
            <img 
              src="https://placehold.co/40x40" 
              alt="User Avatar" 
              className="rounded-full w-10 h-10" 
            />
          </div>
        </header>

        {/* Content Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Konten Edukasi</h2>

          {/* Search Gejala Penyakit */}
          <label htmlFor="penyakit" className="block text-gray-700 mb-2">Gejala Penyakit</label>
          <div className="flex flex-wrap gap-2 mb-6">
            <input 
              type="text" 
              placeholder="penyakit" 
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
            <button 
              className="bg-white text-green-500 px-4 py-2 rounded-full border hover:bg-green-500 hover:text-white border-green-500 transition">
              Cari
            </button>
          </div>

          {/* Articles and Videos */}
          <div className="border p-4 rounded shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Artikel Section */}
              <article>
                <h3 className="text-xl font-semibold mb-4 text-center">Artikel</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Pemahaman HIV/AIDS",
                      description: "HIV (Human Immunodeficiency Virus) adalah virus yang menyebabkan AIDS.",
                      imgSrc: "https://placehold.co/100x100"
                    },
                    {
                      title: "Penyakit Jantung",
                      description: "Penyakit jantung merupakan penyakit yang dapat dicegah dengan gaya hidup sehat.",
                      imgSrc: "https://placehold.co/100x100"
                    },
                    {
                      title: "Diabetes: Gejala dan Pencegahan",
                      description: "Diabetes adalah kondisi di mana tubuh tidak dapat mengatur kadar gula darah.",
                      imgSrc: "https://placehold.co/100x100"
                    },
                    {
                      title: "Mencegah Flu",
                      description: "Flu adalah infeksi virus yang dapat dicegah dengan vaksin.",
                      imgSrc: "https://placehold.co/100x100"
                    },
                    {
                      title: "Mengenal Stroke",
                      description: "Stroke terjadi ketika pasokan darah ke otak terputus.",
                      imgSrc: "https://placehold.co/100x100"
                    },
                    {
                      title: "Menjaga Kesehatan Mental",
                      description: "Kesehatan mental sama pentingnya dengan kesehatan fisik.",
                      imgSrc: "https://placehold.co/100x100"
                    }
                  ].map(({ title, description, imgSrc }) => (
                    <div key={title} className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
                      <img src={imgSrc} alt={title} className="mb-2" />
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Video Section */}
              <article>
                <h3 className="text-xl font-semibold mb-4 text-center">Video</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Penyebab dan Pencegahan Tipes",
                      description: "Berbagai penyebab dan cara pencegahan tipus.",
                      imgSrc: "https://placehold.co/304x197"
                    },
                    {
                      title: "Manfaat Olahraga",
                      description: "Olahraga sangat penting untuk kesehatan.",
                      imgSrc: "https://placehold.co/304x197"
                    },
                    {
                      title: "Nutrisi Seimbang",
                      description: "Menjaga pola makan yang seimbang.",
                      imgSrc: "https://placehold.co/304x197"
                    },
                    {
                      title: "Cara Mengelola Stres",
                      description: "Teknik untuk mengelola stres.",
                      imgSrc: "https://placehold.co/304x197"
                    },
                    {
                      title: "Vaksinasi Penting",
                      description: "Pentingnya vaksinasi untuk kesehatan.",
                      imgSrc: "https://placehold.co/304x197"
                    },
                    {
                      title: "Tips Tidur Nyenyak",
                      description: "Cara mendapatkan tidur yang berkualitas.",
                      imgSrc: "https://placehold.co/304x197"
                    }
                  ].map(({ title, description, imgSrc }) => (
                    <div 
                      key={title} 
                      className="relative bg-white p-4 rounded shadow flex flex-col items-center"
                      style={{ width: '100%' }}
                    >
                      <img src={imgSrc} alt={title} className="mb-2" />
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 rounded">
                        <h4 className="font-semibold text-center">{title}</h4>
                        <p className="text-sm text-center">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
