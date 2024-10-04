import {
  Title,
  Text,
  Form,
  FormItem,
  NumText,
  RegisterInput,
  NumInput,
  RegisterButton
} from 'styles/login/RegisterLayout-styled';


function Register() {
  return (
    <>
      <Form>
        <Title>회원가입</Title>
        <FormItem>
          <Text>학번</Text>
          <RegisterInput />
        </FormItem>
        <FormItem>
          <Text>이름</Text>
          <RegisterInput />
        </FormItem>
        <FormItem>
          <Text>새 비밀번호</Text>
          <RegisterInput />
        </FormItem>
        <FormItem>
          <Text>휴대폰 번호</Text>
          <NumInput />
          <NumText>-</NumText>
          <NumInput maxLength={4} />
          <NumText>-</NumText>
          <NumInput maxLength={4} />
        </FormItem>
        <FormItem>
          <Text>이메일</Text>
          <RegisterInput />
        </FormItem>
        <RegisterButton>등록하기</RegisterButton>
      </Form>
    </>
  );
}


export default Register;
