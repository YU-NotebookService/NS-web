import Button from 'components/common/Button';
import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  border-top: 2px solid var(--main-color);
  display: flex;
  flex-direction: column; /* 상단과 하단을 세로로 배치 */
  gap: 30px;
  padding-top: 30px;
`;

export const MyPageTopSection = styled.div`
  display: flex;
  gap: 30px;
`;

export const MyPageUserInfo = styled.div`
  background: #f1f4fb;
  padding: 20px;
  width: 450px;
`;

export const MyPageNotebookInfo = styled(MyPageUserInfo)`
  width: 80%;
`;

export const MyPageQuestionInfo = styled(MyPageUserInfo)`
  background: #f1f4fb;
  padding: 20px;
  border: 1px solid #ccc;
  width: 100%; 
  box-sizing: border-box;
  max-height: 300px;
  overflow-y: scroll; 
`;

export const InfoTitle = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; 
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
  justify-content: space-between; 
  align-items: center; 
  gap: 15px; 
  margin-bottom: 15px;
`;

export const ListData = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  gap: 10px; 
  margin-bottom: 15px; 
  padding: 10px; 
  border-bottom: 1px solid #e1e1e1; 
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

export const InfoList = styled.div`
  color: var(--gray-color);
  font-size: 23px; 
  font-weight: 400; 
  text-align: left; 
  flex: 1; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
`;

export const ExtendBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExtendBtn = styled(Button)`

`;
