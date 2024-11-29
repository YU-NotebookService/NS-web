import getQuestionList from 'api/question/getQuestionList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from 'api/context/AuthProvider';

function QuestionListLayout() {
  const { user } = useAuth;


  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'writer' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];


  const [questionList, setQuestionList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);


  const fetchQuestionList = useCallback(async () => {
    try {
      const data = await getQuestionList({ currentPage }); // API 호출
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연

      setQuestionList(data.content);
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);

    } catch (err) {
      console.error('공지사항 불러오기 오류:', err);
    }
  }, [currentPage]);


  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  if (!questionList) return <LoadingBar />;


  return (
    <>
      <List
        itemText="개의 게시물이 등록되어 있습니다."
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
