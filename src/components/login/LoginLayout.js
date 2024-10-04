import { useState } from 'react';
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
  LoginInputWrapper,
  LoginButton,
  RegisterButton
} from 'styles/login/LoginLayout-styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginLayout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('제출된 데이터: ', data);
  };

  const navigate = useNavigate();

  function onChangePage() {
    navigate('/register');
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
              isError={!!errors.studentId}
              {...register('studentId', {
                required: '학번을 입력해주세요'
              })}
            />
            {errors.studentId && <ErrorMessage>{errors.studentId.message}</ErrorMessage>}
          </ ErrorWrapper>


          <ErrorWrapper>
            <LoginInput
              placeholder="비밀번호"
              isError={!!errors.password}
              {...register('password', {
                required: '비밀번호를 입력해주세요'
              })}
            />
          </ ErrorWrapper>


          <LoginButton type="button" onClick={handleSubmit(onSubmit)}>로그인</LoginButton>
          <RegisterButton onClick={onChangePage}>회원가입</RegisterButton>
        </Right>
      </LoginBox>
    </LoginWrapper>
  );
}


export default LoginLayout;
