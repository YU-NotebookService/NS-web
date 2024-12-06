import React, { useState, useEffect, useCallback } from 'react';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import getAllUserList from 'api/admin/getAllUserList';

const UserListLayout = () => {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '', width: '0%', key: '' },
    { label: '이름', width: '10%', key: 'name' },
    { label: '학번', width: '15%', key: 'studentNumber' },
    { label: '연락처', width: '20%', key: 'phoneNumber' },
    { label: '이메일', width: '25%', key: 'email' },
    { label: '권한', width: '10%', key: 'role' },
    { label: '대여 상태', width: '10%', key: 'userRentalStatus' }, // 버튼 렌더링을 위한 key
  ];

  const [userList, setUserList] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchuserList = useCallback(async () => {
    try {
      setIsLoading(true); // 로딩 시작
      const response = await getAllUserList({
        currentPage,
      });
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연
      setUserList(response.content);
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
  }, [currentPage]);

  useEffect(() => {
    fetchuserList();
  }, [fetchuserList]);

  if (!userList && isLoading) return <LoadingBar />;

  return (
    <>
      {isLoading ? (
        <LoadingBar /> // 로딩 상태에서 로딩 표시
      ) : (
        <List
          itemText="개의 사용자가 등록되어 있습니다."
          columns={columns}
          currentData={userList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalElements={totalElements}
        />
      )}
    </>
  );
};

export default UserListLayout;
