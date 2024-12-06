import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const MenuBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  top: 20px;
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
