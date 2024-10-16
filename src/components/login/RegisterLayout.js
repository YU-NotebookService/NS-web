import {
  Title,
  Text,
  Form,
  FormItem,
  NumText,
  RegisterWrapper,
  ErrorMessage,
  ErrorWrapper,
  Count,
  RegisterInput,
  NumInput,
  RegisterButton
} from 'styles/login/RegisterLayout-styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [input, setInput] = useState({
    NumText1: '',
    NumText2: '',
    NumText3: ''
  });

  const onSubmit = (data) => {
    const phoneNumber = `${input.NumText1}-${input.NumText2}-${input.NumText3}`;
    const { studentNumber, name, password, email } = data;
    alert([studentNumber, name, password, phoneNumber, email]);
    registerData(studentNumber, name, password, phoneNumber, email);
  };

  function onChangeInput(e) {
    const { name, value } = e.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }));
  }

  function numInputCheck() {
    return input.NumText1 != '' && input.NumText2 != '' && input.NumText3 != '';
  }

  function registerData(studentNumber, name, password, phoneNumber, email) {
    fetch('http://3.39.198.156:8080/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentNumber, name, password, phoneNumber, email }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log('Registration successful');
          alert('회원가입이 완료되었습니다');
        } else {
          console.error('Registration failed:', result.message);
          alert('회원가입에 실패했습니다');
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  }

  return (
    <RegisterWrapper>
      <Form>
        <Title>회원가입</Title>
        <ErrorWrapper>
          <FormItem>
            <Text>학번</Text>
            <RegisterInput
              isError={!!errors.studentId}
              {...register('studentId', {
                required: '학번을 입력해주세요'
              })}
            />
          </FormItem>
          {errors.studentId && <ErrorMessage>{errors.studentId.message}</ErrorMessage>}
        </ ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>이름</Text>
            <RegisterInput
              isError={!!errors.name}
              {...register('name', {
                required: '이름을 입력해주세요'
              })}
            />
          </FormItem>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </ ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>새 비밀번호</Text>
            <RegisterInput
              isError={!!errors.password}
              {...register('password', {
                required: '새 비밀번호를 입력해주세요'
              })}
            />
          </FormItem>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </ ErrorWrapper>
        <ErrorWrapper>
          <FormItem
            isError={!!errors.num}
            {...register('num', {
              required: !numInputCheck() ? '휴대폰 번호를 입력해주세요' : false
            })}
          >
            <Text>휴대폰 번호</Text>
            <NumInput
              value={input.NumText1}
              onChange={onChangeInput}
              name="NumText1"
              isError={!!errors.num}
              style={{
                left: "120px",
                width: "33px"
              }}
            />
            <NumText>-</NumText>
            <NumInput
              value={input.NumText2}
              onChange={onChangeInput}
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
        </ ErrorWrapper>
        <ErrorWrapper>
          <FormItem>
            <Text>이메일</Text>
            <RegisterInput
              isError={!!errors.email}
              {...register('email', {
                required: '이메일을 입력해주세요'
              })}
            />
          </FormItem>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </ ErrorWrapper>
        <RegisterButton onClick={handleSubmit(onSubmit)}>등록하기</RegisterButton>
      </Form>
    </RegisterWrapper>
  );
}


export default Register;
