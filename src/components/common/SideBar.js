import React, { useState } from 'react';
import img_Icon_SideBar from 'assets/mypage/img_Icon_SideBar.svg';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SideButton,
  SidebarCategory,
  Img,
  NavItem,
} from 'styles/SideBar-styled';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SideButton onClick={toggleSidebar}>
        <Img src={img_Icon_SideBar} />
      </SideButton>

      {isOpen && (
        <SidebarList>
          <SidebarItem>
            <SidebarCategory>노트북</SidebarCategory>
            <SidebarList>
              <SidebarItem>
                <NavItem onClick={() => navigate('/rental/request')}>
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
                <NavItem onClick={() => navigate('/user/management')}>
                  전체 사용자 조회
                </NavItem>
              </SidebarItem>
            </SidebarList>
          </SidebarItem>
        </SidebarList>
      )}
    </SidebarContainer>
  );
};

export default SideBar;
