import React from 'react';
import Register from 'components/common/Register';
import postNoticeReg from 'api/notice/postNoticeReg';
import { useAuth } from 'api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const NoticeRegLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    if (!user) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      console.log('전달하는 FormData 내용:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const payload = {
        title: formData.get('title'),
        content: formData.get('content'),
      };
      const response = await postNoticeReg(payload, user);
      console.log('API 응답:', response);
      alert('공지사항이 성공적으로 등록되었습니다!');
      navigate('/notice/list');
    } catch (error) {
      console.error('공지사항 등록 중 오류:', error);
      const errorMessage =
        error.response?.data?.message || '공지사항 등록에 실패했습니다.';
      alert(`오류: ${errorMessage}`);
    }
  };

  return (
    <>
      <Register onSubmit={onSubmit} />
    </>
  );
};

export default NoticeRegLayout;
