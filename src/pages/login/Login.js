import React from "react";
import LoginLayout from "../../components/login/LoginLayout";
import { styled } from "styled-components";

function Login() {
  return (  
    <Container>
      <LoginLayout />
    </Container>
  );
}

export const Container = styled.div`
  width: 100%;
  min-width: 850px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
`;

export default Login;