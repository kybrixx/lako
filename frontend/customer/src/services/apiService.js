const BASE_URL = 'http://127.0.0.1:8000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function getHealth() {
  return request('/health');
}

export async function getEcho(text) {
  return request('/echo', { method: 'POST', body: JSON.stringify({ text }) });
}
