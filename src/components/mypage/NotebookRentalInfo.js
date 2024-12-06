import React from 'react';
import {
  InfoContent,
  InfoLabel,
  InfoLine,
  InfoText,
  InfoTitle,
  MyPageNotebookInfo,
} from 'styles/MyPage-styled';

const NotebookRentalInfo = ({ myRentalInfo = {} }) => {
  const rentalInfo =
    myRentalInfo && Object.keys(myRentalInfo).length > 0
      ? [
          { label: '노트북 ID', text: myRentalInfo?.notebookId || '정보 없음' },
          {
            label: '대여 기간',
            text: `${myRentalInfo?.startDate || '미정'} ~ ${myRentalInfo?.endDate || '미정'}`,
          },
        ]
      : null;

  console.log(rentalInfo);

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
          </>
        ) : (
          <>대여중인 노트북이 없습니다.</>
        )}
      </InfoContent>
    </MyPageNotebookInfo>
  );
};

export default NotebookRentalInfo;
