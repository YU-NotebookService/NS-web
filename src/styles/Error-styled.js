import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  gap: 30px;
`;

export const ErrorText = styled.div`
  font-size: 100px;
  color: var(--main-color);
  font-weight: 1000;
`;

export const ErrorDescription = styled.div`
  font-size: 50px;
  font-weight: 400;
`;
