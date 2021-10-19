export const storageService = { saveToStorage, loadFromStorage };

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return null;
}
