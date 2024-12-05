import Button from 'components/common/Button';
import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  border-top: 2px solid var(--main-color);
  display: flex;
  gap: 30px;
  padding-top: 30px;
`;

export const MyPageUserInfo = styled.div`
  background: #f1f4fb;
  padding: 20px;
  width: 450px;
`;

export const MyPageNotebookInfo = styled(MyPageUserInfo)`
  width: 80%;
`;

export const InfoTitle = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 76.667% */
  letter-spacing: 3px;
  margin: 10px;
  margin-left: 30px;
`;

export const InfoContent = styled.div`
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px 30px;
  padding: 30px 0px;
  padding-bottom: 10px;
`;

export const InfoLine = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const InfoLabel = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 115% */
  letter-spacing: 2px;
  width: 100px;
`;

export const InfoText = styled.div`
  color: var(--gray-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 115% */
  letter-spacing: 2px;
`;

export const ExtendBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExtendBtn = styled(Button)`

`;
