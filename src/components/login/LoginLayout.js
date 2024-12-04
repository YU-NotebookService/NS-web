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
import loginApi from 'api/common/loginApi';
import { useAuth } from 'api/context/AuthProvider';

function LoginLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const response = await loginApi(formData);
      const { accessToken, ...user } = response;

      console.log(
        '로그인 성공! 반환된 사용자 정보:',
        user,
        'AccessToken:',
        accessToken,
      );

      // 로그인 정보 저장
      login({ user, token: accessToken });
      user.role === 'ADMIN' ? navigate('/adminpage') : navigate('/main');
    } catch (error) {
      console.error('로그인 실패:', error.message);
      alert(error.message);
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
