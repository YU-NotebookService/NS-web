import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { styled } from 'styled-components';

export const RegisterWrapper = styled.div`

`;

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

export const ErrorMessage = styled.div`
  padding: 5px 0px 0px 160px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: red;
`;

export const ErrorWrapper = styled.div`
  width: 500px;
`;

export const Count = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; 
  letter-spacing: 1.6px;
  width: 100%;
  text-align: end;
  color: ${(props) => (props.isError ? 'red' : 'var(--gray-color)')};
`;

export const RegisterInput = styled(Input)`
  width: 275px;
  border: 1px solid ${props => props.isError ? 'red' : 'var(--gray-color)'};
`;

export const NumInput = styled(Input)`
  width: 35px;
  border: 1px solid ${props => props.isError ? 'red' : 'var(--gray-color)'};
`;

export const RegisterButton = styled(Button)`
  width: 450px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 850px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;