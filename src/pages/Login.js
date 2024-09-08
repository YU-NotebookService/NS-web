import { useState, createContext } from "react";
import styled from "styled-components";

export const userContext = createContext();

function Login() {
  const [input, setInput] = useState({ 
    studentId: "",
    name: "",
  })

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Container>
      <Header>노트북 대여</Header>
      <LoginBox>
        <Left>

        </Left>
        <Right>
          <Input
            value={input.studentId}
            placeholder="아이디"
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
        </Right>
      </LoginBox>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  color: #0d3f7a;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid rgb(211, 211, 211);
  display: flex;
  align-items: center;
  justify-content: space-between;


`;

const LoginBox = styled.div`
  width: 80%;
  max-width: 850px;
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid #8d8f90;
  background-color: #ffffff;
  color: #666666;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
`;

const LoginButton = styled.input`
  width: 100%;
  padding: 15px;
  background-color: #0d3f7a;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

const Left = styled.div`
  width: 48%;
`;

const Right = styled.div`
  width: 48%;
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #333a47;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export default Login;