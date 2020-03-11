export const updateCache = (key, data) => {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(data));
};

export const getFromCache = key => {
  const cached = localStorage.getItem(JSON.stringify(key));
  if (cached) {
    return JSON.parse(cached);
  }
  return null;
};
