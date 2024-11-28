import axios from 'axios';

// 기존 axios 객체 생성
const api = axios.create({
  baseURL: 'http://52.78.65.211:8080/api/',
  withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    console.log('가져온 토큰 : ', token);
    if (token) {
      config.headers['Authorization-Access'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error), // 요청 설정 에러 처리
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response, // 정상 응답 처리
  (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === '토큰이 만료되었습니다'
    ) {
      console.warn('토큰 만료. 로그아웃 처리.');
      localStorage.removeItem('accessToken');
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      window.location.href = '/'; // 로그인 페이지로 이동
    }
    return Promise.reject(error); // 기타 에러는 그대로 반환
  },
);

export default api;
