import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Footer from '../components/Footer';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-green-600">
    {children}
  </a>
);

const ServiceCard = ({ imgSrc, color, title, description, imgSize }) => (
  <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <header className="flex flex-col items-start mb-4">
      <div className={`bg-${color}-100 p-4 rounded-full mb-2`}>
        <img src={imgSrc} alt={title} className={imgSize} /> 
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </header>
  </article>
);

const services = [
  {
    imgSrc: 'src/assets/images/cari.png',
    color: 'white',
    title: 'Cari Dokter',
    description: 'Pilih dokter Anda dari ribuan rumah sakit spesialis, umum, dan terpercaya.',
    imgSize: 'w-30 h-30' 
  },
  {
    imgSrc: 'src/assets/images/obat.png',
    color: 'white',
    title: 'Apotek Daring',
    description: 'Beli obat Anda dengan aplikasi seluler kami dengan sistem pengiriman sederhana',
    imgSize: 'w-30 h-30' 
  },
  {
    imgSrc: 'src/assets/images/konsul.png',
    color: 'yellow',
    title: 'Konsultasi',
    description: 'Konsultasi gratis dengan dokter terpercaya kami dan dapatkan rekomendasi terbaik',
    imgSize: 'w-30 h-30' 
  },
  {
    imgSrc: 'src/assets/images/pengingat.png',
    color: 'purple',
    title: 'Detail Pengingat',
    description: 'Pengingat untuk pengobatan, minum obat sesuai resep, jadwal janji temu dengan dokter, dan aktivitas kesehatan lainnya.',
    imgSize: 'w-30 h-30' 
  },
  {
    imgSrc: 'src/assets/images/kontenedu.png',
    color: 'white',
    title: 'Konten Edukasi',
    description: 'Mencegah penyakit Menular dan tidak menular seperti penyakit jantung, diabetes, dan gangguan mental',
    imgSize: 'w-30 h-30' 
  },
  {
    imgSrc: 'src/assets/images/pelacakan.png',
    color: 'teal',
    title: 'Pelacakan',
    description: 'Lacak dan simpan riwayat kesehatan dan data kesehatan Anda',
    imgSize: 'w-30 h-30' 
  }
];

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
  >
    {children}
  </button>
);

const Home = () => {
  const navigate = useNavigate(); 

  const goToLogin = () => {
    navigate('/login'); 
  };

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white shadow-md w-full">
        <div className="flex items-center">
          <img src="src/assets/images/logokecil.png" alt="KitaSehat logo" className="mr-2" />
          <span className="text-2xl font-bold text-green-600">KitaSehat</span>
        </div>
        <nav className="space-x-6">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Cari Dokter</NavLink>
          <NavLink href="#">Apps</NavLink>
          <NavLink href="#">Tautan</NavLink>
          <NavLink href="#">Tentang Kami</NavLink>
        </nav>
      </header>

      <main className="text-center pt-12 lg:pt-20 min-h-screen bg-gray-50 flex flex-col justify-start">
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center w-full">
          <article className="lg:w-1/2 text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Layanan kesehatan virtual untukmu
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              KitaSehat memberikan layanan yang personal dan terjangkau kapanpun kamu butuhkan,
              dapat diakses melalui ponsel dan online untuk semua orang.
            </p>
            <Button onClick={goToLogin}>Gabung sekarang</Button> 
          </article>
          <figure className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="src/assets/images/illustration.png"
              alt="Illustration of virtual health services"
              className="mx-auto"
            />
          </figure>
        </section>
      </main>

      <section className="bg-gray-50 py-16 w-full">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Layanan kami</h2>
          <p className="text-xl text-gray-600 mt-4">
            Kami memberikan kepada Anda pilihan terbaik untuk Anda. <br />
            Sesuaikan dengan kebutuhan kesehatan Anda dan dapatkan layanan terbaik dari kami.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>Pelajari lebih lanjut</Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
