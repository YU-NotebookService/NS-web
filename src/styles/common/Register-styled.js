import styled from 'styled-components';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

export const RegisterWrapper = styled.form`
  border-top: 2px solid var(--main-color);
`;

export const FormWrapper = styled.div`
  padding: 30px 0px 60px 250px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const InputTitle = styled.div`
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  letter-spacing: 1.6px;
  width: 200px;
  padding-top: 32px;
`;

export const PostInput = styled(Input)`
  width: 500px;
  border: ${({ $isError }) =>
    $isError ? '1px solid red' : '1px solid #dbdbdb;'};
`;

export const ContentInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const ContentInputTitle = styled.div`
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  letter-spacing: 1.6px;
  width: 200px;
  padding-top: 30px;
`;

export const ContentInput = styled.textarea`
  padding: 24px 24px;
  font-family: pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  width: 500px;
  height: 500px;
  &::placeholder {
    color: #dbdbdb;
  }
  border: ${({ $isError }) =>
    $isError ? '1px solid red' : '1px solid #dbdbdb;'};
`;

export const PicBtn = styled(Button)`
  width: 120px;
  font-size: 15px;
  margin-left: 20px;
  position: absolute;
  right: -140px;
`;

export const RegBtn = styled(Button)`
  width: 200px;
  margin: auto;
`;

export const Error = styled.div`
  padding: 5px 0px 0px 24px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  color: red;
`;

export const ErrorWrapper = styled.div`
  width: 550px;
`;

export const PicWrapper = styled.div`
  width: 550px;
  display: flex;
  position: relative;
`;

export const PicInput = styled(Input)`
  display: none;
`;

export const Count = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  letter-spacing: 1.6px;
  width: 100%;
  text-align: end;
  color: ${({ $isError }) => ($isError ? 'red' : 'var(--gray-color)')};
`;

export const PicTitle = styled.div`
  white-space: nowrap;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 143.75% */
  letter-spacing: 1.6px;
  width: 200px;
  padding-top: 12px;
`;

export const FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeleteWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const DeleteBtn = styled.div`
  display: flex;
  cursor: pointer;
  color: var(--main-color);
  border-bottom: 1px solid var(--main-color);
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const PicNotice = styled.div`
  padding: 14px 24px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  color: #dbdbdb;
  width: 500px;
`;
