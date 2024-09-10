import { useState, createContext } from "react";
import img_Logo_YU from '../../assets/img_Logo_YU2.svg';
import {
  Container, 
  LoginBox,
  Logo,
  Input, 
  LoginButton,
  CreateButton,
  Left,
  Right,
} from '../../components/LoginLayout-styled';

export const userContext = createContext();

function Login() {
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
    <Container>
      <LoginBox>
        <Left>
          <Logo src={img_Logo_YU}/>
        </Left>
        <Right>
          <Input
            value={input.studentId}
            placeholder="학번"
            onChange={onChangeInput}
            name="studentId"
          />
          <Input
            value={input.password}
            placeholder="비밀번호"
            onChange={onChangeInput}
            name="password"
            type="password"
          />
          <LoginButton type="submit" value="로그인" />
          <CreateButton type = "submit" value="회원가입" />
        </Right>
      </LoginBox>
    </Container>
  );
}

export default Login;