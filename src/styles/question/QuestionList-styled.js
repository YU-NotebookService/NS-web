import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

export const StateText = styled.span`
  color: var(--main-color);
  font-weight: bold;
`;

export const AnswerContent = styled.div`
  display: flex; 
  align-items: center; 
  gap: 10px; 
  margin-top: -50px;
  padding: 30px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
  border-bottom: 1px solid #e1e1e1;
`;

export const ReplyContent = styled(Input)`
  padding: 20px;
  width: 80%;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
  border-bottom: 1px solid #e1e1e1;
`
export const SubmitBtn = styled(Button)`
   padding: 16px 35px;
   
`

export const ListBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ListText = styled.span`
  margin-right: 10px;
  font-size: 20px;
  color: var(--main-color);
  font-weight: bold;
`

export const ListBtn = styled(Button)`
 background-color: white;
  color: ${({ isFiltered }) => (isFiltered ? 'var(--main-color)' : 'lightgrey')};
  transition: 0s; 
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  padding: 5px 20px;
`
