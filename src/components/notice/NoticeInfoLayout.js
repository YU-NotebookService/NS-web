import Detail from 'components/common/Detail';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getNoticeInfo from 'api/notice/getNoticeInfo';
import delNoticeInfo from 'api/notice/delNoticeInfo';
import { LoadingBar } from 'components/common/LoadingBar';
import { useAuth } from 'api/context/AuthProvider';

const NoticeInfoLayout = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();
  const { user } = useAuth();

  const [noticeInfo, setNoticeInfo] = useState({
    title: '',
    content: '',
    date: new Date().toISOString(),
    imgUrl: [],
  });

  const goToNoticeList = () => {
    navigate('/notice/list');
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  const fetchNoticeInfo = useCallback(async () => {
    try {
      const response = await getNoticeInfo({ noticeId });

      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 시뮬레이션

      const normalizedResponse = {
        ...response,
        date: formatDate(response.date || new Date().toISOString()), // 날짜 포맷 변환
        imgUrl: response.imageUrl || [], // 이미지 URL 배열 처리
      };

      setNoticeInfo(normalizedResponse);
    } catch (error) {
      console.error(
        '공지사항 정보를 불러오는 데 실패하였습니다',
        error.message,
      );
    }
  }, [noticeId]);

  useEffect(() => {
    if (noticeId) {
      fetchNoticeInfo();
    }
  }, [noticeId]);

  const deleteNoticeInfo = async () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await delNoticeInfo(noticeId, user);
        alert('삭제되었습니다.');
        goToNoticeList();
      } catch (error) {
        console.error('삭제에 실패하였습니다:', error.message);

        // 오류 메시지를 사용자에게 표시
        if (error.message.includes('로그인')) {
          alert('로그인이 필요합니다. 로그인 후 다시 시도해주세요.');
        } else if (error.message.includes('권한')) {
          alert('삭제 권한이 없습니다. 관리자에게 문의하세요.');
        } else if (error.message.includes('네트워크')) {
          alert(
            '네트워크 문제 또는 서버 오류가 발생했습니다. 다시 시도해주세요.',
          );
        } else {
          alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.');
        }
      }
    }
  };

  if (!noticeInfo.title) return <LoadingBar />;

  return (

    <>
      <Detail data={noticeInfo} goToList={goToNoticeList} />
    </>

  );
};

export default NoticeInfoLayout;
