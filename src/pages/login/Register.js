import { styled } from 'styled-components';
import RegisterLayout from '../../components/login/RegisterLayout';

function Register() {
  return (
    <Container>
      <RegisterLayout />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 850px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Register;
