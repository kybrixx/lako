import { useEffect, useState } from 'react';

export default function useSync(syncFunction) {
  const [syncStatus, setSyncStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;

    async function doSync() {
      setSyncStatus('syncing');
      try {
        await syncFunction();
        if (!cancelled) setSyncStatus('synced');
      } catch (err) {
        if (!cancelled) setSyncStatus('error');
      }
    }

    doSync();

    return () => {
      cancelled = true;
    };
  }, [syncFunction]);

  return { syncStatus };
}
