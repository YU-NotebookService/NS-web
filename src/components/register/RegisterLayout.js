import {
  Title,
  Text,
  Form,
  FormItem,
  NumText
} from '../../styles/RegisterLayout-styled';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import styled from "styled-components";

function Register() {
  return (  
    <>
      <Title>회원가입</Title>
      <Form>
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
          <NumInput/>
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

const RegisterInput = styled(Input)`
  width: 270px;
`;

const NumInput = styled(Input)`
  width: 35px;
`;

const RegisterButton = styled(Button)`
  width: 450px;
  margin-top: 30px;
`;

export default Register;