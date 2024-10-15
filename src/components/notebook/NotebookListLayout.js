import getNotebookList from 'api/notebook/getNotebookList';
import List from 'components/common/list/List';
import { useEffect, useState } from 'react';

function NotebookListLayout() {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '모델명', width: '55%', key: 'model' },
    { label: '운영체제', width: '20%', key: 'os' },
    { label: '대여상태', width: '15%', key: 'rentalStatus' },
  ];

  const [notebookList, setNotebookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    const fetchNotebookList = async () => {
      try {
        const response = await getNotebookList({ currentPage });
        setNotebookList(response.content);
        setTotalPages(response.totalPages);
        setTotalElements(response.totalElements);
        console.log('response', response);
      } catch (error) {
        console.error(
          '노트북 리스트를 불러오는 데 실패하였습니다:',
          error.message,
        );
      }
    };
    fetchNotebookList();
  }, [currentPage]);

  return (
    <>
      <List
        itemText="개의 노트북이 등록되어 있습니다."
        columns={columns}
        currentData={notebookList}
        buttonText="신규 등록"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </>
  );
}

export default NotebookListLayout;
