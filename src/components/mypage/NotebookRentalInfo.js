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

const NotebookRentalInfo = ({ myRentalInfo }) => {
  const rentalInfo =
    myRentalInfo && myRentalInfo.length > 0
      ? [
          { label: '노트북 ID', text: myRentalInfo.notbookId },
          {
            label: '대여 기간',
            text: `${myRentalInfo.startDate} ~ ${myRentalInfo.endDate}`,
          },
        ]
      : null;

  return (
    <MyPageNotebookInfo>
      <InfoTitle>대여 중인 노트북 정보</InfoTitle>

      <InfoContent>
        {rentalInfo ? (
          <>
            {rentalInfo.map((el, index) => (
              <InfoLine key={index}>
                <InfoLabel>{el.label}</InfoLabel>
                <InfoText>{el.text}</InfoText>
              </InfoLine>
            ))}
            <ExtendBtnWrapper>
              <ExtendBtn>연장 신청</ExtendBtn>
            </ExtendBtnWrapper>
          </>
        ) : (
          <>대여중인 노트북이 없습니다.</>
        )}
      </InfoContent>
    </MyPageNotebookInfo>
  );
};

export default NotebookRentalInfo;
