import { useState } from "react";
import img_Logo_YU from '../../assets/login/img_Logo_YU.svg';
import {
  LoginBox,
  Logo,
  Left,
  Right,
} from '../../styles/LoginLayout-styled';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import styled from "styled-components";

function LoginLayout() {
  const [input, setInput] = useState({ 
    studentId: "",
    password: "",
  })

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <LoginBox>
        <Left>
          <Logo src={img_Logo_YU}/>
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
          <Button 
          style={{
            padding: '0px',
            backgroundColor: 'white',
            color: 'var(--main-color)',
            fontSize: '20px',
            height: '50px',
            marginLeft: '270px',
          }}
          >
            회원가입
          </Button>
        </Right>
      </LoginBox>
    </>
  );
}

const LoginInput = styled(Input)`
  width: 300px;
  height: 25px;
  margin-top: 20px;
`;

const LoginButton = styled(Button)`
  width: 350px;
  height: 50px;
  margin-top: 20px;
`;



export default LoginLayout;