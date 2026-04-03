export function cacheGet(key) {
  return localStorage.getItem(key);
}

export function cacheSet(key, value) {
  localStorage.setItem(key, value);
}

export function cacheClear() {
  localStorage.clear();
}
