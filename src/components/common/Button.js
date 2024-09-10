import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: var(--main-color);
  font-family: pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
    background-color: #ccc;
  }
`;

export default Button;
