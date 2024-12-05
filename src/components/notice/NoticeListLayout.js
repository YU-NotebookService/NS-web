import React, { useCallback, useEffect, useState } from 'react';
import List from 'components/common/list/List';
import getNoticeList from 'api/notice/getNoticeList';
import { LoadingBar } from 'components/common/LoadingBar';

function NoticeListLayout() {
  const columns = [
    { label: '번호', width: '10%', key: 'index' }, // 리스트 번호
    { label: '제목', width: '65%', key: 'title' },
    { label: '작성일', width: '25%', key: 'date' }, // API의 date 키 사용
  ];

  const [noticeList, setNoticeList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리

  const fetchNoticeList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getNoticeList({ currentPage });

      // 날짜를 "년. 월. 일" 형식으로 변환 (마지막 마침표 제거)
      const formatter = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      const sortedNotices = response.content.map((notice) => {
        const formattedDate = formatter.format(new Date(notice.date));
        return {
          ...notice,
          date: formattedDate.endsWith('.') // 마지막 마침표 제거
            ? formattedDate.slice(0, -1)
            : formattedDate,
        };
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
      setNoticeList(sortedNotices);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(
        '공지사항 리스트를 불러오는 데 실패하였습니다: ',
        error.message,
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchNoticeList();
  }, [fetchNoticeList]);

  if (!noticeList && isLoading) return <LoadingBar />;

  return (
    <>
      {isLoading ? (
        <LoadingBar /> // 로딩 상태에서 로딩 표시
      ) : (
        <List
          itemText="개의 공지사항이 등록되어 있습니다."
          columns={columns}
          currentData={noticeList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalElements={totalElements}
          totalPages={totalPages}
          buttonText="글쓰기"
        />
      )}{' '}
    </>
  );
}
export default NoticeListLayout;
