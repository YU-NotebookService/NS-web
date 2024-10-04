import { useState } from 'react';
import img_Logo_YU from 'assets/login/img_Logo_YU.svg';
import {
  LoginBox,
  Logo,
  Left,
  Right,
  LoginInput,
  LoginButton,
  RegisterButton
} from 'styles/login/LoginLayout-styled';
import { useNavigate } from 'react-router-dom';

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


export default LoginLayout;
