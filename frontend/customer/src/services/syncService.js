import { getHealth } from './apiService';

export async function syncData() {
  const health = await getHealth();
  return { synced: true, healthy: health.status };
}

export function syncStatus() {
  return { status: 'ready' };
}
