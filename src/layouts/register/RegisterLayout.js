import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Form,
  FormItem,
  NumText
} from '../../styles/RegisterLayout-styled';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

function Register() {
  return (  
    <Container>
      <Title>회원가입</Title>
      <Form>
        <FormItem>
          <Text>학번</Text>
          <Input
          style = {{
            width: "270px"
          }}/>
        </FormItem>
        <FormItem>
          <Text>이름</Text>
            <Input
              style = {{
                width: "270px"
              }}
            />
        </FormItem>
        <FormItem>
          <Text>새 비밀번호</Text>
          <Input
            style = {{
              width: "270px"
            }}
          />
        </FormItem>
        <FormItem>
          <Text>휴대폰 번호</Text>
          <Input
            style = {{
              width: "35px"
            }}
          />
          <NumText>-</NumText>
          <Input
            style = {{
              width: "35px"
            }}
          />
          <NumText>-</NumText>
          <Input
            style = {{
              width: "35px"
            }}
          />
        </FormItem>
        <FormItem>
          <Text>이메일</Text>
          <Input
            style = {{
              width: "270px"
            }}
          />
        </FormItem>
        <Button
          style = {{
            width: "450px",
            marginTop: "30px"
          }}
        >
          가입하기
        </Button>
      </Form>
    </Container>

  );
}

export default Register;