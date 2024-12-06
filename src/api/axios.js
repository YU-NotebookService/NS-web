import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.78.65.211:8080/api/',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization-Access'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === '토큰이 만료되었습니다'
    ) {
      console.warn('토큰 만료. 로그아웃 처리.');
      localStorage.removeItem('accessToken');
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export default api;
