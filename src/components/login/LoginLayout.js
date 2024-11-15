import loginData from 'api/userData/getUserData';
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
    const { studentNumber, password } = data;
    fetchLoginData(studentNumber, password);
  };

  const navigate = useNavigate();

  function onChangePage() {
    navigate('/register');
  }

  async function fetchLoginData(studentNumber, password) {
    try {
      const res = await loginData(studentNumber, password);

      if (res.status === 200) {
        alert(`학번 ${studentNumber} 로그인이 완료되었습니다`);
        navigate('/main');
      }
    }
    catch (error) {
      console.error('Login failed:', error);
      alert('잘못된 학번 또는 비밀번호입니다');
    }
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
