import Banner from 'components/common/Banner';
import React, { useState } from 'react';
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
import img_Icon_SideBar from 'assets/mypage/img_Icon_SideBar.svg';
import UserListLayout from 'components/common/admin/UserListLayout';

const AllUserList = () => {
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
            titleText={'전체 사용자 조회'}
          />
          <UserListLayout />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AllUserList;
