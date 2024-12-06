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
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNotebookList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getNotebookList({
        currentPage,
        onlyAvailable,
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setNotebookList(response.content);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } catch (error) {
      console.error(
        '노트북 리스트를 불러오는 데 실패하였습니다:',
        error.message,
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, onlyAvailable]);

  useEffect(() => {
    fetchNotebookList();
  }, [fetchNotebookList]);

  if (!notebookList && isLoading) return <LoadingBar />;

  return (
    <>
      {isLoading ? (
        <LoadingBar />
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
