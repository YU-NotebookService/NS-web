import React from 'react';
import img_Logo_YU from '../assets/img_Logo_YU.svg';
import {
  LogoContainer,
  HeaderLogo,
  Title,
  PageWrapper,
  PageItem,
  DivideLine,
  NavBar,
  NavItem,
} from '../styles/layouts/HeaderLayout-styled';
// TODO: 절대 경로 설정.
const HeaderLayout = () => {
  return (
    <>
      <LogoContainer>
        <HeaderLogo src={img_Logo_YU} />
        <Title>노트북대여</Title>
        <PageWrapper>
          {/* TODO: 추후 링크 연결 예정 */}
          <PageItem>영남대 LMS</PageItem>
          <PageItem>교내사이트 바로가기</PageItem>
        </PageWrapper>
      </LogoContainer>
      <DivideLine>
        <hr />
      </DivideLine>
      <NavBar>
        {/* TODO: Navigate 구현 예정 */}
        <NavItem>노트북 대여</NavItem>
        <NavItem>공지사항</NavItem>
        <NavItem>1:1문의</NavItem>
        <NavItem>마이페이지</NavItem>
      </NavBar>
    </>
  );
};

export default HeaderLayout;
