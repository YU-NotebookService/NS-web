import React from 'react';
import img_Logo_YU from '../assets/layout/img_Logo_YU.svg';
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
import { useLocation, useNavigate } from 'react-router-dom';
// TODO: 절대 경로 설정.
const HeaderLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <LogoContainer>
        <HeaderLogo src={img_Logo_YU} />
        <Title onClick={() => navigate('/main')}>노트북대여</Title>
        <PageWrapper>
          {/* TODO: 추후 링크 연결 예정 */}
          <PageItem
            onClick={() => (window.location.href = 'https://nice.yu.ac.kr/lms')}
          >
            영남대 LMS
          </PageItem>
          |
          <PageItem
            onClick={() =>
              (window.location.href = 'https://www.yu.ac.kr/main/index.do')
            }
          >
            교내사이트 바로가기
          </PageItem>
        </PageWrapper>
      </LogoContainer>
      <DivideLine>
        <hr />
      </DivideLine>
      {location.pathname !== '/' &&
        location.pathname !== '/register' && ( //로그인, 회원가입 페이지에만 보이지 않음
          <NavBar>
            {/* TODO: Navigate 구현 예정 */}
            <NavItem onClick={() => navigate('/notebook/list')}>
              노트북 대여
            </NavItem>
            <NavItem onClick={() => navigate('/notice/list')}>공지사항</NavItem>
            <NavItem onClick={() => navigate('/question/list')}>
              1:1문의
            </NavItem>
            <NavItem onClick={() => navigate('/mypage')}>마이페이지</NavItem>
          </NavBar>
        )}
    </>
  );
};

export default HeaderLayout;
