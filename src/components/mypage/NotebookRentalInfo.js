import React from 'react';
import {
  ExtendBtn,
  ExtendBtnWrapper,
  InfoContent,
  InfoLabel,
  InfoLine,
  InfoText,
  InfoTitle,
  MyPageNotebookInfo,
} from 'styles/MyPage-styled';

const NotebookRentalInfo = ({ notebookName, rentalDate }) => {
  const RentalInfo = [
    { label: '모델명', text: notebookName },
    { label: '대여 기간', text: rentalDate },
  ];
  return (
    <MyPageNotebookInfo>
      <InfoTitle>대여 중인 노트북 정보</InfoTitle>
      <InfoContent>
        {RentalInfo.map((el, index) => (
          <InfoLine>
            <InfoLabel>{el.label}</InfoLabel>
            <InfoText>{el.text}</InfoText>
          </InfoLine>
        ))}
        <ExtendBtnWrapper>
          <ExtendBtn>연장 신청</ExtendBtn>
        </ExtendBtnWrapper>
      </InfoContent>
    </MyPageNotebookInfo>
  );
};

export default NotebookRentalInfo;
