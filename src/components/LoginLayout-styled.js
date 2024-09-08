import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
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
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  margin: 10px 0;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #B3AEAE;
  background-color: #ffffff;
  color: #666666;
  box-sizing: border-box;
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
  transition: 0.5s;
  
`;

export const LoginButton = styled.input`
  width: 350px;
  height: 50px;
  background-color: #0d3f7a;
  color: white;
  border: none;
  color: #FFF;
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
  margin-top: 10px;
`;

export const Logo = styled.img`
  width: 300px;
  
`;

export const CreateButton = styled.div`
  margin-left: 250px;
  width: 100px;
  height: 30px;
  background-color: black;
  font-family: Inter;
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
`;

export const Left = styled.div`
  width: 400px;
`;

export const Right = styled.div`
  width: 400px;
`;