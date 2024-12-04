import React, { useState, useEffect } from 'react';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import getRentalRequest from 'api/admin/getRentalRequest';
import postRentalRequest from 'api/admin/postRentalRequest';

function AdminRentalRequestLayout({ user }) {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '대여 중인 노트북', width: '30%', key: 'notebookModel' },
    { label: '학번', width: '15%', key: 'studentNumber' },
    { label: '연락처', width: '15%', key: 'phoneNumber' },
    { label: '요청 일자', width: '15%', key: 'requestDate' },
    { label: '승인', width: '15%', key: 'button' }, // 버튼 렌더링을 위한 key
  ];

  const [rentalRequestList, setRentalRequestList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRentalRequestList = async () => {
    setLoading(true);
    try {
      const response = await getRentalRequest();
      setRentalRequestList(response.reservationRequests || []);
      console.log('response', response.reservationRequests);
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
      fetchRentalRequestList();
    } catch (error) {
      alert(`대여 요청 승인 실패: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchRentalRequestList();
  }, []);

  if (loading) return <LoadingBar />;

  return (
    <>
      <List
        itemText="개의 대여 요청이 있습니다."
        columns={columns}
        currentData={rentalRequestList}
        totalElements={rentalRequestList.length}
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
