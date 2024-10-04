import Button from 'components/common/Button';
import Input from 'components/common/Input';
import styled from 'styled-components';

export const Wrapper = styled.form`
  border-radius: 10px;
  border: 1px solid var(--gray-color);
  display: flex;
`;

export const SearchInput = styled(Input)`
  border: none;
`;

export const SearchBtn = styled(Button)`
  background: none;
  border: none;
  padding: 0px 10px;
`;
