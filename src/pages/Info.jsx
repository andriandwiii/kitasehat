import React, { useState } from 'react';
import ProvinsiList from '../components/ProvinsiList.jsx';
import KabupatenList from '../components/KabupatenList.jsx';
import KecamatanList from '../components/KecamatanList.jsx';
import KelurahanList from '../components/KelurahanList.jsx';

function Hal1() {
  const [selectedProvinsi, setSelectedProvinsi] = useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = useState(null);

  return (
    <div className="app-container" style={styles.appContainer}>
      <header className="app-header" style={styles.appHeader}>
        <h1 style={styles.title}>Data Wilayah Indonesia</h1>
        <h2 style={styles.subtitle}>Selamat Datang di Aplikasi Data Wilayah</h2>
        <div style={styles.card}>
          <ProvinsiList onProvinsiSelect={setSelectedProvinsi} />
          {selectedProvinsi && (
            <KabupatenList
              provinsiId={selectedProvinsi}
              onKabupatenSelect={setSelectedKabupaten}
            />
          )}
          {selectedKabupaten && (
            <KecamatanList
              kabupatenId={selectedKabupaten}
              onKecamatanSelect={setSelectedKecamatan}
            />
          )}
          {selectedKecamatan && (
            <KelurahanList
              kecamatanId={selectedKecamatan}
            />
          )}
        </div>
      </header>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#eaf7ea', // Light green background
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  appHeader: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff', // White background for card
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#2c662d', // Dark green
    fontSize: '2.5em',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#4caf50', // Medium green
    fontSize: '1.2em',
    marginBottom: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0fff0', // Light greenish background
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default Hal1;