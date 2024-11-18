import axios from 'axios';

const postNotebookInfo = async (data) => {
  try {
    const response = await axios.post(
      'http://52.78.65.211:8080/api/admin/notebooks/create',
      data,
    ); // 노트북 생성 API 호출
    return response.data;
  } catch (error) {
    console.error('전체 에러 객체:', error);

    if (error.response) {
      // 상태 코드 및 예외 처리
      const errorCode = error.response.data?.code; // 예외 코드 가져오기
      const errorMessage = error.response.data?.message; // 예외 메시지 가져오기

      console.error('응답 상태 코드:', error.response.status);
      console.error('응답 에러 코드:', errorCode);
      console.error('응답 에러 메시지:', errorMessage);

      // 명세에 따른 예외 처리
      switch (errorCode) {
        case 'AE1':
          throw new Error('해당 요청에 대한 권한이 없습니다.');
        case 'NE2':
          throw new Error('잘못된 입력입니다. 필수 값을 확인해주세요.');
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

export default postNotebookInfo;
