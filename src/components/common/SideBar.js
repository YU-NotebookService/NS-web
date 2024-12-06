import React from 'react';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SidebarCategory,
  NavItem,
} from 'styles/SideBar-styled';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarCategory>노트북</SidebarCategory>
          <SidebarList>
            <SidebarItem>
              <NavItem onClick={() => navigate('/adminpage')}>
                대여 요청 조회
              </NavItem>
            </SidebarItem>
            <SidebarItem>
              <NavItem onClick={() => navigate('/extension/request')}>
                연장 요청 조회
              </NavItem>
            </SidebarItem>
          </SidebarList>
        </SidebarItem>
        <SidebarItem>
          <SidebarCategory>회원관리</SidebarCategory>
          <SidebarList>
            <SidebarItem>
              <NavItem onClick={() => navigate('users')}>
                전체 사용자 조회
              </NavItem>
            </SidebarItem>
          </SidebarList>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default SideBar;
