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
  padding: 20px;
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

export const CreateButton = styled.input`
  margin-top: 10px;
  margin-left: 270px;
  width: 80px;
  height: 30px;
  color: #0d3f7a;
  background-color: white;
  font-family: Inter;
  font-size: 18px;
  font-weight: 800;
  line-height: normal;
  border: none;
`;

export const Left = styled.div`
  width: 400px;
`;

export const Right = styled.div`
  width: 400px;
`;