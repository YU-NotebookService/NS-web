import api from 'api/axios';

const postExtendNotebook = async (data, notebookId) => {
  try {
    const response = await api.post(`extends/create/${notebookId}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('전체 에러 객체:', error);

    if (error.response) {
      const { status, data } = error.response;

      console.error('에러 발생:', {
        상태코드: status,
        에러코드: data?.code || '없음',
        메시지: data?.message || '없음',
      });

      const errorMessage =
        {
          AE1: '권한이 없습니다. 관리자에게 문의하세요.',
          NE1: '존재하지 않는 노트북 ID입니다. 다시 확인해주세요.',
          UE6: '존재하지 않는 사용자입니다.',
          RE3: '대여 중인 노트북이 없습니다.',
          RE4: '이 노트북은 현재 사용자의 대여 중 항목이 아닙니다.',
        }[data?.code] ||
        `예상치 못한 오류 발생: ${data?.message || '오류 메시지가 없습니다.'}`;

      throw new Error(errorMessage);
    } else if (error.request) {
      console.error('요청 객체:', error.request);
      throw new Error('네트워크 문제 또는 서버가 응답하지 않습니다.');
    } else {
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 중 오류가 발생했습니다.');
    }
  }
};

export default postExtendNotebook;
