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
  LoginButton,
  RegisterButton
} from 'styles/login/LoginLayout-styled';
import { useForm, useNavigate } from 'react-router-dom';

function LoginLayout() {
  const {
    login,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const studentId = watch('studentId', '');
  const password = watch('password', '');

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
    <LoginWrapper>
      <LoginBox>
        <Left>
          <Logo src={img_Logo_YU} />
        </Left>
        <Right>
          <ErrorWrapper>
            <LoginInput
              value={input.studentId}
              placeholder="학번"
              onChange={onChangeInput}
              name="studentId"
              isError={!!errors.studentId}
              {...login('studentId', {
                required: '학번을 입력해주세요',
              })}
            />
            {errors.studentId && <ErrorMessage>{errors.studentId.message}</ErrorMessage>}
          </ ErrorWrapper>
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
    </LoginWrapper>
  );
}


export default LoginLayout;
