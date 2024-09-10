import { useState, createContext } from "react";
import img_Logo_YU from '../../assets/img_Logo_YU2.svg';
import {
  Container, 
  LoginBox,
  Logo,
  CreateButton,
  Left,
  Right,
} from '../../components/LoginLayout-styled';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

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
            style={{
              width: '300px',
              height: '20px',
            }}
          />
          <Input
            value={input.password}
            placeholder="비밀번호"
            onChange={onChangeInput}
            name="password"
            type="password"
            style={{
              width: '300px',
              height: '20px',
              marginTop: '20px'
            }}
          />
          <Button 
          style={{
            width: '350px',
            height: '50px',
            marginTop: '20px'
          }}
          >
            로그인
          </Button>
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
    </Container>
  );
}

export default Login;