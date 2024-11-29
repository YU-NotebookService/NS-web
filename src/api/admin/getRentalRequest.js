import api from 'api/axios';

const getRentalRequest = async ({ page = 0 }) => {
  try {
    const response = await api.get('/admin/request/rental', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('대여 요청 리스트 API 호출 실패:', error);

    if (error.response) {
      console.error('응답 오류:', error.response.data);
      throw new Error('서버 오류 발생');
    } else if (error.request) {
      console.error('네트워크 오류 또는 서버 응답 없음');
      throw new Error('네트워크 오류 또는 서버 응답 없음');
    } else {
      console.error('요청 설정 오류:', error.message);
      throw new Error('요청 설정 오류');
    }
  }
};

export default getRentalRequest;
