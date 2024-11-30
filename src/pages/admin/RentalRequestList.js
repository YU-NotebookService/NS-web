import Banner from 'components/common/Banner';
import React from 'react';
// import { Wrapper, Content } from 'styles/common/List-styled';
import myPageBanner from 'assets/mypage/myPageBanner.png';
import Title from 'components/common/Title';
import SideBar from 'components/common/SideBar';
import { Container, Wrapper, Content } from 'styles/AdminPage-styled';
import AdminPageLayout from 'components/common/admin/AdminPageLayout';

const RentalRequestList = () => {
  return (
    <Wrapper>
      <Banner data={myPageBanner} text="관리자 페이지" />
      <Container>
        <SideBar />
        <Content className="Content">
          <Title
            locationText={['관리자 페이지']}
            titleText={'대여 요청 조회'}
          />
          <AdminPageLayout />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default RentalRequestList;
