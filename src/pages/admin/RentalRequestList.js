import Banner from 'components/common/Banner';
import React, { useState } from 'react';
// import { Wrapper, Content } from 'styles/common/List-styled';
import myPageBanner from 'assets/mypage/myPageBanner.png';
import Title from 'components/common/Title';
import SideBar from 'components/common/SideBar';
import {
  Container,
  Wrapper,
  Content,
  Img,
  MenuBtn,
  MenuContainer,
} from 'styles/AdminPage-styled';
import AdminPageLayout from 'components/common/admin/AdminPageLayout';
import img_Icon_SideBar from 'assets/mypage/img_Icon_SideBar.svg';

const RentalRequestList = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Banner data={myPageBanner} text="관리자 페이지" />
      <Container>
        <MenuContainer>
          <MenuBtn onClick={() => setClicked(!clicked)}>
            <Img src={img_Icon_SideBar} />
          </MenuBtn>
          {clicked && <SideBar />}
        </MenuContainer>
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
