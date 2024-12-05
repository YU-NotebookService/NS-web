import {
  Title,
  Text,
  Form,
  FormItem,
  NumText,
  RegisterWrapper,
  ErrorMessage,
  ErrorWrapper,
  RegisterInput,
  NumInput,
  RegisterButton,
} from 'styles/login/RegisterLayout-styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import registerApi from 'api/common/registerApi';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const phoneNumber = `${input.NumText1}-${input.NumText2}-${input.NumText3}`;
    formData.phoneNumber = phoneNumber;

    console.log('제출된 데이터: ', formData);

    try {
      const response = await registerApi(formData);
      console.log('회원가입 성공: ', response);
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('회원가입 실패: ', error.message);
      alert(error.message);
    }
  };

  const [input, setInput] = useState({
    NumText1: '',
    NumText2: '',
    NumText3: '',
  });

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function numInputCheck() {
    return (
      input.NumText1 !== '' && input.NumText2 !== '' && input.NumText3 !== ''
    );
  }

  return (
    <RegisterWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>회원가입</Title>
        <ErrorWrapper>
          <FormItem>
            <Text>학번</Text>
            <RegisterInput
              isError={!!errors.studentNumber}
              {...register('studentNumber', {
                required: '학번을 입력해주세요',
              })}
            />
          </FormItem>
          {errors.studentNumber && (
            <ErrorMessage>{errors.studentNumber.message}</ErrorMessage>
          )}
        </ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>이름</Text>
            <RegisterInput
              isError={!!errors.name}
              {...register('name', {
                required: '이름을 입력해주세요',
              })}
            />
          </FormItem>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>새 비밀번호</Text>
            <RegisterInput
              isError={!!errors.password}
              {...register('password', {
                required: '새 비밀번호를 입력해주세요',
                minLength: {
                  value: 10,
                  message: "비밀번호는 10자 이상 입력해주세요"
                },
              })}
            />
          </FormItem>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </ErrorWrapper>
        <ErrorWrapper>
          <FormItem
            isError={!!errors.num}
            {...register('num', {
              required: !numInputCheck() ? '휴대폰 번호를 입력해주세요' : false,
            })}
          >
            <Text>휴대폰 번호</Text>
            <NumInput
              value={input.NumText1}
              onChange={(e) => {
                onChangeInput(e);
                if (e.target.value.length === 3) {
                  document.getElementsByName('NumText2')[0].focus();
                }
              }}
              name="NumText1"
              isError={!!errors.num}
              maxLength={3}
              style={{
                left: '120px',
                width: '33px',
              }}
            />
            <NumText>-</NumText>
            <NumInput
              value={input.NumText2}
              onChange={(e) => {
                onChangeInput(e);
                if (e.target.value.length === 4) {
                  document.getElementsByName('NumText3')[0].focus();
                }
              }}
              name="NumText2"
              isError={!!errors.num}
              maxLength={4}
            />
            <NumText>-</NumText>
            <NumInput
              value={input.NumText3}
              onChange={onChangeInput}
              name="NumText3"
              isError={!!errors.num}
              maxLength={4}
            />
          </FormItem>
          {errors.num && <ErrorMessage>{errors.num.message}</ErrorMessage>}
        </ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>이메일</Text>
            <RegisterInput
              isError={!!errors.email}
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: '올바른 이메일 형식을 입력해주세요.',
                },
              })}
            />
          </FormItem>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ErrorWrapper>
        <RegisterButton type="submit">등록하기</RegisterButton>
      </Form>
    </RegisterWrapper>
  );
}

export default Register;
