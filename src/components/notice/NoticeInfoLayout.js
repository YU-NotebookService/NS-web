import Detail from 'components/common/Detail';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getNoticeInfo from 'api/notice/getNoticeInfo';
import { LoadingBar } from 'components/common/LoadingBar';

const NoticeInfoLayout = () => {
  const navigate = useNavigate();
  const { noticeId } = useParams();

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

  if (!noticeInfo.title) return <LoadingBar />;

  return (
    <>
      <Detail data={noticeInfo} goToList={goToNoticeList} />
    </>
  );
};

export default NoticeInfoLayout;
