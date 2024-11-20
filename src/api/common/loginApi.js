import api from 'api/axios';

const loginApi = async (data) => {
  try {
    const response = await api.post('login', data);
    return response.data;
  } catch (error) {
    console.error('전체 에러 객체:', error);

    if (error.response) {
      // 상태 코드와 응답 데이터 출력
      console.error('응답 상태 코드:', error.response.status);
      console.error('응답 데이터:', error.response.data);

      // 상태 코드에 따른 에러 처리
      if (error.response.status === 401) {
        throw new Error('아이디 또는 비밀번호가 잘못되었습니다.');
      } else if (error.response.status >= 500) {
        throw new Error('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      } else {
        throw new Error(`오류 발생: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error('요청 객체:', error.request);
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 오류가 발생했습니다.');
    }
  }
};

export default loginApi;
