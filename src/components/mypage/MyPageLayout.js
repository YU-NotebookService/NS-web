import React, { useEffect, useState, useCallback } from 'react';
import { MyPageWrapper, MyPageTopSection } from 'styles/MyPage-styled';
import UserInfo from 'components/mypage/UserInfo';
import NotebookRentalInfo from 'components/mypage/NotebookRentalInfo';
import MyQuestionList from 'components/mypage/MyQuestionList';
import getMyRental from 'api/mypage/getMyRental';
import { useAuth } from 'api/context/AuthProvider';

const MyPageLayout = () => {
  const { user } = useAuth();
  console.log(user);
  const [myRental, setMyRental] = useState();

  const fetchMyRental = useCallback(async () => {
    try {
      const response = await getMyRental();
      setMyRental(response[0]);
    } catch (error) {
      console.error(
        '나의 대여 정보를 불러오는 데 실패하였습니다:',
        error.message,
      );
    }
  }, []); // 빈 배열로 인해 메모이제이션됨

  useEffect(() => {
    fetchMyRental();
    console.log(myRental);
  }, [fetchMyRental]); // fetchMyRental을 의존성 배열에 추가

  return (
    <MyPageWrapper>
      <MyPageTopSection>
        <UserInfo
          name={user.name}
          sid={user.studentNumber}
          phoneNum={user.phoneNumber}
        />
        <NotebookRentalInfo myRentalInfo={myRental} />
      </MyPageTopSection>
      <MyQuestionList />
    </MyPageWrapper>
  );
};

export default MyPageLayout;
