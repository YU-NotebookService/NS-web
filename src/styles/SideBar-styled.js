import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  font-size: 24px;
  border-right: 1px solid #ccc;
`;

export const SidebarList = styled.div`
  list-style: none;
  padding: 0;
  margin: 40px 20px;
  width: 200px;
`;

export const SidebarItem = styled.div`
  margin: 4px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const SidebarCategory = styled.div`
  font-weight: bold;
  color: var(--main-color);
  font-size: 28px;
`;

export const NavItem = styled.div`
  cursor: pointer;
  color: gray;
  font-size: 20px;

  &:hover {
    color: var(--main-color);
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
