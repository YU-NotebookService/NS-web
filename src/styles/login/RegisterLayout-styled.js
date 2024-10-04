import { styled } from "styled-components";
import Input from "components/common/Input";
import Button from "components/common/Button";


export const Title = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.span`
  width: 100px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 20px;
  color: var(--gray-color);
`;

export const Form = styled.div`
  display: flex;
  margin: 50px 0;
  flex-direction: column;
  align-items: center;
`;

export const FormItem = styled.div`
   width: 500px;
   margin-top: 30px;
   display: flex;
   align-items: center;
   justify-content: center;

`;

export const NumText = styled.span`
  width: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0 12px;
  color: var(--gray-color);
`;

export const RegisterInput = styled(Input)`
  width: 270px;
  border-color: var(--gray-color);
`;

export const NumInput = styled(Input)`
  width: 35px;
  border-color: var(--gray-color);
`;

export const RegisterButton = styled(Button)`
  width: 450px;
  margin-top: 30px;
  margin-bottom: 30px;
`;