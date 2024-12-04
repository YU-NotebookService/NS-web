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
  NavBtn,
  UserName,
  LogoutBtn,
} from '../styles/layouts/HeaderLayout-styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';
const HeaderLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <LogoContainer>
        <HeaderLogo src={img_Logo_YU} />
        <Title
          onClick={() => {
            if (location.pathname === '/' || location.pathname === '/register')
              return;
            else navigate('/main');
          }}
        >
          노트북대여
        </Title>
        <PageWrapper>
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
      {location.pathname !== '/' && location.pathname !== '/register' && (
        <NavBar>
          <NavBtn>
            <NavItem onClick={() => navigate('/notebook/list')}>
              노트북 대여
            </NavItem>
            <NavItem onClick={() => navigate('/notice/list')}>공지사항</NavItem>
            <NavItem onClick={() => navigate('/question/list')}>
              1:1문의
            </NavItem>
            {user?.role === 'ADMIN' ? (
              <NavItem onClick={() => navigate('/adminpage')}>
                관리자 페이지
              </NavItem>
            ) : (
              <NavItem onClick={() => navigate('/mypage')}>마이페이지</NavItem>
            )}
          </NavBtn>
          <NavBtn>
            <UserName>
              안녕하세요,
              <span style={{ color: 'var(--main-color)' }}>{user?.name}</span>
              님!
            </UserName>
            <LogoutBtn onClick={() => logout(() => navigate('/'))}>
              로그아웃
            </LogoutBtn>
          </NavBtn>
        </NavBar>
      )}
    </>
  );
};

export default HeaderLayout;
