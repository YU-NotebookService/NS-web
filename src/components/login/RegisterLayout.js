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

  const onSubmit = (data) => {
    console.log('제출된 데이터: ', data);
  };

  const [input, setInput] = useState({
    NumText1: '',
    NumText2: '',
    NumText3: ''
  });

  function onChangeInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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
          <FormItem>
            <Text>휴대폰 번호</Text>
            <NumInput />
            <NumText>-</NumText>
            <NumInput maxLength={4} />
            <NumText>-</NumText>
            <NumInput maxLength={4} />
          </FormItem>
        </ ErrorWrapper>
        <FormItem>
          <Text>이메일</Text>
          <RegisterInput />
        </FormItem>
        <RegisterButton onClick={handleSubmit(onSubmit)}>등록하기</RegisterButton>
      </Form>
    </RegisterWrapper>
  );
}


export default Register;
