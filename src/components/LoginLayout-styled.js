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
  font-size: 16px;
  font-weight: 800;
  line-height: normal;
  &:focus{
    border-color: #0d3f7a;
    border-width: 2px;
    outline: none;
  }
`;

export const LoginButton = styled.input`
  width: 350px;
  height: 50px;
  background-color: #0d3f7a;
  color: white;
  border: none;
  font-family: Inter;
  font-size: 16px;
  font-weight: 800;
  line-height: normal;
  cursor: pointer;
  margin-top: 10px;
`;

export const Logo = styled.img`
  width: 290px;
  margin-top: -10px;
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