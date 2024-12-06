import styled from 'styled-components';

const Input = styled.input`
  padding: 14px 24px;
  font-family: pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  &::placeholder {
    color: #dbdbdb;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
