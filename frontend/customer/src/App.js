import React, { useEffect, useState } from 'react';
import { getHealth } from './services/apiService';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import MainStack from './navigation/MainStack';

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
    <AuthContextProvider>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        <h1>Lako Customer Frontend</h1>
        <p>Backend health: {health}</p>
        <p>Error: {error || 'none'}</p>
        <MainStack />
      </div>
    </AuthContextProvider>
  );
}
