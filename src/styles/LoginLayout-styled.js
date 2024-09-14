import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 850px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
`;

export const LoginBox = styled.div`
  
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 200px 50px;
`;

export const Logo = styled.img`
  width: 290px;
  margin-top: -30px;
  margin-left: 30px;
`;

export const Left = styled.div`
  width: 400px;
`;

export const Right = styled.div`
  width: 400px;
`;