import React from 'react';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Wrapper>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Layout;
