import getNotebookList from 'api/notebook/getNotebookList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';

function NotebookListLayout() {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '모델명', width: '55%', key: 'model' },
    { label: '운영체제', width: '20%', key: 'os' },
    { label: '대여상태', width: '15%', key: 'rentalStatus' },
  ];

  const [notebookList, setNotebookList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // 대여 상태 필터 (true: 대여 가능, false: 대여 불가)
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  // 로딩 상태 추가
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotebookList = useCallback(async () => {
    try {
      setIsLoading(true); // 로딩 시작
      const response = await getNotebookList({
        currentPage,
        onlyAvailable,
      });
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연
      setNotebookList(response.content);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(
        '노트북 리스트를 불러오는 데 실패하였습니다:',
        error.message,
      );
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  }, [currentPage, onlyAvailable]);

  useEffect(() => {
    fetchNotebookList();
  }, [fetchNotebookList]);

  if (!notebookList && isLoading) return <LoadingBar />;

  return (
    <>
      {isLoading ? (
        <LoadingBar /> // 로딩 상태에서 로딩 표시
      ) : (
        <List
          itemText="개의 노트북이 등록되어 있습니다."
          columns={columns}
          currentData={notebookList}
          buttonText="신규 등록"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalElements={totalElements}
          setOnlyAvailable={setOnlyAvailable}
          onlyAvailable={onlyAvailable}
        />
      )}
    </>
  );
}

export default NotebookListLayout;
