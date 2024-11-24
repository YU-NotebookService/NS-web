import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
  font-size: 24px;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  background-color: ${({ isOpen }) =>
    isOpen ? 'var(--main-color)' : 'transparent'};
  height: 100vh;
`;

export const SideButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0; 
  position: absolute;
  top: 20px; 
  left: ${({ isOpen }) => (isOpen ? '220px' : '10px')}; 
  transform: translateX(-10%);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px; 
  height: 40px;
`;

export const SidebarList = styled.div`
  list-style: none;
  padding: 0;
  margin: 40px 20px;
  width: 100%;
`;

export const SidebarItem = styled.div`
  margin: 4px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const SidebarCategory = styled.div`
  font-weight: bold;
  color: white;
  font-size: 28px;
`;

export const NavItem = styled.div`
  cursor: pointer;
  color: gray;

  &:hover {
    color: white;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
