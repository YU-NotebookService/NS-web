import { styled } from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";

export const LoginWrapper = styled.div`

`;

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

export const ErrorMessage = styled.div`
  padding: 5px 0px 0px 24px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: red;
`;

export const ErrorWrapper = styled.div`
  width: 550px;
`;

export const Count = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; 
  letter-spacing: 1.6px;
  width: 100%;
  text-align: end;
  color: ${(props) => (props.isError ? 'red' : 'var(--gray-color)')};
`;

export const LoginInput = styled(Input)`
  width: 300px;
  height: 20px;
  margin-top: 20px;
  border-color: var(--gray-color);
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