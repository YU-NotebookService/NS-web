import React from 'react';
import { MyPageWrapper } from 'styles/MyPage-styled';
import UserInfo from './UserInfo';
import NotebookRentalInfo from './NotebookRentalInfo';

const MyPageLayout = () => {
  return (
    <MyPageWrapper>
      <UserInfo name="홍길동" sid="22011475" phoneNum="010-9147-5631" />
      <NotebookRentalInfo
        notebookName="LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)"
        rentalDate="2024-09-03 ~ 2024-10-10"
      />
    </MyPageWrapper>
  );
};

export default MyPageLayout;
