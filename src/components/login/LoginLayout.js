import { useState } from 'react';
import img_Logo_YU from 'assets/login/img_Logo_YU.svg';
import {
  LoginBox,
  Logo,
  Left,
  Right,
} from 'styles/login/LoginLayout-styled';
import { useNavigate } from 'react-router-dom';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { styled } from 'styled-components';

function LoginLayout() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    studentId: '',
    password: '',
  });

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function onChangePage() {
    navigate('/register');
  }

  return (
    <>
      <LoginBox>
        <Left>
          <Logo src={img_Logo_YU} />
        </Left>
        <Right>
          <LoginInput
            value={input.studentId}
            placeholder="학번"
            onChange={onChangeInput}
            name="studentId"
          />
          <LoginInput
            value={input.password}
            placeholder="비밀번호"
            onChange={onChangeInput}
            name="password"
            type="password"
          />
          <LoginButton>로그인</LoginButton>
          <RegisterButton onClick={onChangePage}>회원가입</RegisterButton>
        </Right>
      </LoginBox>
    </>
  );
}

const LoginInput = styled(Input)`
  width: 300px;
  height: 20px;
  margin-top: 20px;
`;

const LoginButton = styled(Button)`
  width: 350px;
  height: 50px;
  margin-top: 20px;
`;

const RegisterButton = styled(Button)`
  padding: 0px;
  border:none;
  background-color: white;
  color: var(--main-color);
  font-size: 20px;
  height: 20px;
  margin-top: 10px;
  margin-left: 275px;
`;

export default LoginLayout;
