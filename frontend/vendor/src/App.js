import React, { useEffect, useState } from 'react';
import { getHealth } from './services/apiService';
import { VendorAuthContext, VendorAuthContextProvider } from './context/VendorAuthContext';
import VendorMainStack from './navigation/VendorMainStack';

export default function App() {
  const [health, setHealth] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    getHealth()
      .then((result) => setHealth(result.status))
      .catch((err) => {
        setError(err.message);
        setHealth('error');
      });
  }, []);

  return (
    <VendorAuthContextProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        <h1>Lako Vendor Frontend</h1>
        <p>Backend health: {health}</p>
        <p>Error: {error || 'none'}</p>
        <VendorMainStack />
      </div>
    </VendorAuthContextProvider>
  );
}
