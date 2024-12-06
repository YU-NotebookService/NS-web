import api from 'api/axios';

const registerApi = async (data) => {
  try {
    const response = await api.post('register', data);
    return response.data;
  } catch (error) {
    console.error('전체 에러 객체:', error);

    if (error.response) {
      const errorCode = error.response.data?.code;
      const errorMessage = error.response.data?.message;

      console.error('응답 상태 코드:', error.response.status);
      console.error('응답 에러 코드:', errorCode);
      console.error('응답 에러 메시지:', errorMessage);

      switch (errorCode) {
        case 'UE1':
          throw new Error('잘못된 이메일 형식입니다.');
        case 'UE2':
          throw new Error('잘못된 비밀번호 형식입니다. (10자 이상)');
        case 'UE3':
          throw new Error('입력 값이 비어있습니다.');
        case 'UE4':
          throw new Error('이미 가입된 사용자입니다.');
        case 'UE5':
          throw new Error('회원가입에 실패했습니다.');
        default:
          throw new Error(
            `예상치 못한 오류 발생: ${errorMessage || '오류 메시지가 없습니다.'}`,
          );
      }
    } else if (error.request) {
      console.error('요청 객체:', error.request);
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 중 오류가 발생했습니다.');
    }
  }
};

export default registerApi;
