import getQuestionList from 'api/question/getQuestionList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';
import { StateText } from 'styles/question/QuestionList-styled';

function QuestionListLayout() {


  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'user' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];

  const [questionList, setQuestionList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const fetchQuestionList = useCallback(async () => {
    try {
      const response = await getQuestionList({ currentPage });
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연
      setQuestionList(response.content);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(
        '문의글 리스트를 불러오는 데 실패하였습니다:',
        error.message,
      );
    }
  }, [currentPage]);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);


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
