import { useState, useEffect } from 'react';
import img_Logo_YU from 'assets/login/img_Logo_YU.svg';
import {
  LoginWrapper,
  LoginBox,
  Logo,
  Left,
  Right,
  ErrorMessage,
  ErrorWrapper,
  Count,
  LoginInput,
  LoginButton,
  RegisterButton
} from 'styles/login/LoginLayout-styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function LoginLayout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('제출된 데이터: ', data);
    const { studentNumber, password } = data;
    alert([studentNumber, password]);
    loginData(studentNumber, password);
  };

  const navigate = useNavigate();

  function onChangePage() {
    navigate('/register');
  }

  function loginData(studentNumber, password) {
    axios.post('http://localhost:3000/auth/login', {
      studentNumber: studentNumber,
      password: password
    },
      {}).then(res => {

      })
  }

  return (
    <LoginWrapper>
      <LoginBox>
        <Left>
          <Logo src={img_Logo_YU} />
        </Left>
        <Right>
          <ErrorWrapper>
            <LoginInput
              placeholder="학번"
              isError={!!errors.studentNumber}
              {...register('studentNumber', {
                required: '학번을 입력해주세요'
              })}
            />
            {errors.studentNumber && <ErrorMessage>{errors.studentNumber.message}</ErrorMessage>}
          </ ErrorWrapper>

          <ErrorWrapper>
            <LoginInput
              type='password'
              placeholder="비밀번호"
              isError={!!errors.password}
              {...register('password', {
                required: '비밀번호를 입력해주세요'
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </ ErrorWrapper>

          <LoginButton onClick={handleSubmit(onSubmit)}>로그인</LoginButton>
          <RegisterButton onClick={onChangePage}>회원가입</RegisterButton>
        </Right>
      </LoginBox>
    </LoginWrapper>
  );
}


export default LoginLayout;
