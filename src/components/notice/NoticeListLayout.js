import React, { useEffect, useState } from 'react';
import List from 'components/common/list/List';
import getNoticeList from 'api/notice/getNoticeList';
import { LoadingBar } from 'components/common/LoadingBar';

function NoticeListLayout() {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  const columns = [
    { label: '번호', width: '10%', key: 'index' }, // 리스트 번호
    { label: '제목', width: '65%', key: 'title' },
    { label: '작성자', width: '15%', key: 'writer' },
    { label: '작성일', width: '10%', key: 'date' }, // API의 date 키 사용
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setIsLoading(true); // 로딩 시작
        const data = await getNoticeList(); // API 호출
        if (data && data.notices) {
          // API 응답 데이터가 존재하면 상태에 저장
          setNotices(
            data.notices.map((notice, index) => ({
              index: index + 1, // 번호는 1부터 시작
              noticeId: notice.noticeId, // API에서 받은 고유 ID
              title: notice.title || '제목 없음', // 기본값 설정
              writer: notice.writer || '관리자', // 작성자 기본값
              date: notice.date || '날짜 없음', // 날짜 기본값
            })),
          );
        } else {
          throw new Error('공지사항 데이터가 없습니다.');
        }
      } catch (err) {
        console.error('공지사항 불러오기 오류:', err);
        setError(err.message || '공지사항을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    fetchNotices();
  }, []);

  if (isLoading) {
    return <LoadingBar />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <List
        itemText={`${notices.length}개의 게시물이 등록되어 있습니다.`}
        columns={columns}
        currentData={notices}
        buttonText="글쓰기"
      />
    </>
  );
}

export default NoticeListLayout;
