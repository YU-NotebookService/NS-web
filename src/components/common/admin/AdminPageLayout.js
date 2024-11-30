import React, { useState, useEffect } from 'react';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import getRentalRequest from 'api/admin/getRentalRequest';
import postRentalRequest from 'api/admin/postRentalRequest';

function AdminRentalRequestLayout({ user }) {
  const columns = [
    { label: '학번', width: '13%', key: 'studentId' },
    { label: '대여 중인 노트북', width: '23%', key: 'notebookId' },
    { label: '연락처', width: '18%', key: 'contact' },
    { label: '대여시작일자', width: '15%', key: 'rentalStartDate' },
    { label: '반납예정일자', width: '15%', key: 'returnDueDate' },
    { label: '승인 버튼', width: '15%', key: 'button' }, // 버튼 렌더링을 위한 key
  ];

  const [rentalRequestList, setRentalRequestList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchRentalRequestList = async (page) => {
    setLoading(true);
    try {
      const response = await getRentalRequest({ page });

      setRentalRequestList(response.content || []);
      setTotalPages(response.totalPages || 0);
      setTotalElements(response.totalElements || 0);
    } catch (error) {
      console.error('대여 요청 리스트를 불러오는 데 실패하였습니다:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (reservationId) => {
    try {
      const response = await postRentalRequest({ reservationId }, user);
      alert(`대여 요청이 승인되었습니다: ${response.message}`);
      fetchRentalRequestList(currentPage);
    } catch (error) {
      alert(`대여 요청 승인 실패: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchRentalRequestList(currentPage);
  }, [currentPage]);

  if (loading) return <LoadingBar />;

  return (
    <>
      <List
        itemText="개의 대여 요청이 있습니다."
        columns={columns}
        currentData={rentalRequestList}
        buttonText="신규 등록"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalElements={totalElements}
        renderButton={(rowData) => (
          <button
            onClick={() => handleApproval(rowData.reservationId)}
            style={{
              padding: '5px 10px',
              backgroundColor: 'var(--main-color)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            승인
          </button>
        )}
      />
    </>
  );
}

export default AdminRentalRequestLayout;
