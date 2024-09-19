import React from 'react';
import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Wrapper>
      <HeaderLayout />
      <Content>
        <Outlet />
      </Content>
      <FooterLayout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

export default Layout;
