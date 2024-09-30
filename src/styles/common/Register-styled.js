import styled from 'styled-components';

export const RegisterWrapper = styled.form`
  padding: 60px 360px 60px 360px;
  border-top: 2px solid var(--main-color);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputTitle = styled.div`
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  letter-spacing: 1.6px;
  width: 30%;
`;
