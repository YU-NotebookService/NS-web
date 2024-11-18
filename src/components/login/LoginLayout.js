import img_Logo_YU from 'assets/login/img_Logo_YU.svg';
import {
  LoginWrapper,
  LoginBox,
  Logo,
  Left,
  Right,
  ErrorMessage,
  ErrorWrapper,
  LoginInput,
  LoginButton,
  RegisterButton,
} from 'styles/login/LoginLayout-styled';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import login from 'api/common/login';
import { useAuth } from 'api/context/AuthProvider';

function LoginLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login: saveUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    console.log('전송 데이터:', formData);

    try {
      // 로그인 API 호출
      const response = await login(formData);
      console.log('로그인 성공:', response);

      saveUser(response);

      navigate('/main');
    } catch (error) {
      // 에러 처리
      console.error('로그인 실패:', error.message);
      alert(error.message); // 사용자에게 에러 메시지 표시
    }
  };

  function onChangePage() {
    navigate('/register');
  }

  return (
    <LoginWrapper>
      <LoginBox onSubmit={handleSubmit(onSubmit)}>
        <Left>
          <Logo src={img_Logo_YU} />
        </Left>
        <Right>
          <ErrorWrapper>
            <LoginInput
              placeholder="학번"
              autoComplete="username"
              $isError={!!errors.studentNumber}
              {...register('studentNumber', {
                required: '학번을 입력해주세요',
              })}
            />
            {errors.studentNumber && (
              <ErrorMessage>{errors.studentNumber.message}</ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper>
            <LoginInput
              placeholder="비밀번호"
              type="password"
              autoComplete="current-password"
              $isError={!!errors.password}
              {...register('password', {
                required: '비밀번호를 입력해주세요',
              })}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </ErrorWrapper>
          <LoginButton type="submit">로그인</LoginButton>
          <RegisterButton onClick={onChangePage}>회원가입</RegisterButton>
        </Right>
      </LoginBox>
    </LoginWrapper>
  );
}

export default LoginLayout;
