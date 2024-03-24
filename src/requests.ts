/* eslint-disable func-names */
import axios from 'axios';

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: 'https://open.tiktokapis.com/v2/',
  timeout: 120000, // Waiting 2m for request timeout
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
  },
});

instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken_');
  if (accessToken && config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    if (error.response.status === 401) {
      // const clearLSEvent = new Event('clearLS');
      // LocalStorageEventTarget.dispatchEvent(clearLSEvent);
    }
    return Promise.reject(error);
  },
);

export { instance as clientRequest };
