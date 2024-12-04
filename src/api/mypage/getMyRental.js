import api from 'api/axios';

const getMyRental = async () => {
  try {
    const response = await api.get(`my/rentals`);
    return response.data;
  } catch (error) {
    console.error('API 요청 중 오류 발생', error);
    // 에러 유형에 따라 처리
    if (error.response) {
      // 서버가 응답했지만 오류 상태 코드가 반환됨
      console.error('응답 오류:', error.response.data);
      throw new Error('서버 오류 발생');
    } else if (error.request) {
      // 요청이 전송되었지만 응답을 받지 못함
      console.error('네트워크 오류 또는 서버 응답 없음');
      throw new Error('네트워크 오류 또는 서버 응답 없음');
    } else {
      // 요청 설정 중 발생한 오류
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 오류');
    }
  }
};

export default getMyRental;
