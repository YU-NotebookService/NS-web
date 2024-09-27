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
  border: 1px solid var(--main-color);
  cursor: pointer;
  &:disabled {
    cursor: default;
    background-color: #ccc;
  }

  transition: 0.2s;
  &:hover {
    background: #fff;
    color: var(--main-color);
  }
`;

export default Button;
