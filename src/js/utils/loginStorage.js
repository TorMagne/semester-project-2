const tokenKey = 'token';
const userKey = 'user';

export const saveToken = (token) => {
  saveToStorage(tokenKey, token);
};

export const getToken = () => {
  return getFromStorage(tokenKey);
};

export const saveUser = (user) => {
  saveToStorage(userKey, user);
};

export const getUserName = () => {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }
  return null;
};

export const clearLogoutInfo = () => {
  localStorage.removeItem(userKey);
};

const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return null;
  } else {
    return JSON.parse(value);
  }
};
