import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.78.65.211:8080/api/',
  withCredentials: true,
});

export default api;
