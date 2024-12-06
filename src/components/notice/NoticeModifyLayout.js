import Register from 'components/common/Register';
import React from 'react';
import { useAuth } from 'api/context/AuthProvider';
import putNoticeInfo from 'api/notice/putNoticeInfo';
import { useNavigate, useParams } from 'react-router-dom';

const NoticeModifyLayout = () => {
  const { user } = useAuth();
  const { noticeId } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await putNoticeInfo(noticeId, formData, user);
      alert('공지사항이 성공적으로 수정되었습니다.');
      navigate('/notice/list');
    } catch (error) {
      console.error('공지사항 수정 실패: ', error.message);
      alert(error.message);
    }
  };

  return <Register onSubmit={onSubmit} />;
};

export default NoticeModifyLayout;
