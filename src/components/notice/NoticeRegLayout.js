import React from 'react';
import Register from 'components/common/Register';
import postNoticeReg from 'api/notice/postNoticeReg';
import { useAuth } from 'api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const NoticeRegLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await postNoticeReg(formData, user);
      console.log('API 응답:', response);
      alert('공지사항이 성공적으로 등록되었습니다!');
      navigate('/notice/list');
    } catch (error) {
      console.error('공지사항 등록 중 오류:', error);
      alert(error.message || '공지사항 등록에 실패했습니다.');
    }
  };
  return <Register onSubmit={onSubmit} />;
};

export default NoticeRegLayout;
