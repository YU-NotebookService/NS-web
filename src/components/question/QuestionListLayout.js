import getQuestionList from 'api/question/getQuestionList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';

function QuestionListLayout() {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'writer' },
    { label: '작성일', width: '20%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];

  const [questionList, setQuestionList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [filtered, setFiltered] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuestionList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getQuestionList({ currentPage });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setQuestionList(response.content);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error('게시물 리스트를 불러오는 데 실패했습니다:', error.message);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  const filteredList =
    filtered === null
      ? questionList
      : questionList.filter((item) => item.state === filtered);

  const toggleFilter = (filter) => {
    setFiltered((prev) => (prev === filter ? null : filter));
  };

  if (!questionList && isLoading) return <LoadingBar />;

  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <List
          itemText="개의 게시물이 등록되어 있습니다."
          columns={columns}
          currentData={filteredList}
          buttonText="글쓰기"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalElements={totalElements}
          isFiltered={filtered}
          toggleFilter={toggleFilter}
        />
      )}
    </>
  );
}

export default QuestionListLayout;
