const JWT_TOKEN = "JWT_TOKEN";

export const getToken = () => {
  return window.localStorage.getItem(JWT_TOKEN);
};

export const saveToken = (token) => {
  window.localStorage.setItem(JWT_TOKEN, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(JWT_TOKEN);
};

export default { getToken, saveToken, destroyToken };
