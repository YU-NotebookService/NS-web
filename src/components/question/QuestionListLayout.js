import getQuestionList from 'api/question/getQuestionList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';
import { StateText } from 'styles/question/QuestionList-styled';

function QuestionListLayout() {


  const columns = [
    { label: '번호', width: '10%', key: 'index' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'user' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];

  const [questionList, setQuestionList] = useState();


  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getQuestionList(); // API 호출
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


  if (!questionList) return <LoadingBar />;


  if (questionList.length == 0) {
    alert("asd");
    return;
  }

  return (
    <>
      <List
        itemText='개의 게시물이 등록되어 있습니다.'
        columns={columns}
        currentData={questionList}
        buttonText="글쓰기"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </>
  );
}

export default QuestionListLayout;
