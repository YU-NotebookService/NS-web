import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.39.198.156:8080/api/',
  withCredentials: true,
});

export default api;
