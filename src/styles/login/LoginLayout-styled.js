import { styled } from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";

export const LoginBox = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 170px 50px;
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

export const LoginInput = styled(Input)`
  width: 300px;
  height: 20px;
  margin-top: 20px;
`;

export const LoginButton = styled(Button)`
  width: 350px;
  height: 50px;
  margin-top: 20px;
`;

export const RegisterButton = styled(Button)`
  padding: 0px;
  border:none;
  background-color: white;
  color: var(--main-color);
  font-size: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 275px;
`;