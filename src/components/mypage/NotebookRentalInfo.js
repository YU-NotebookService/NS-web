import React, { useState } from 'react';
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
import postExtendNotebook from 'api/notebook/postExtendNotebook';

const NotebookRentalInfo = ({ myRentalInfo }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasExtended, setHasExtended] = useState(false);

  const handleExtendRequest = async () => {
    if (!myRentalInfo.notebookId) {
      alert('노트북 ID가 유효하지 않습니다.');
      return;
    }

    if (isSubmitting || hasExtended) return; // 중복 클릭 방지

    setIsSubmitting(true);

    try {
      const requestData = { requestDate: new Date().toISOString() };
      console.log('API 호출 준비:', requestData, myRentalInfo.notebookId);

      const response = await postExtendNotebook(
        requestData,
        myRentalInfo.notebookId,
      );
      console.log('연장 신청 성공:', response);
      alert('연장 신청이 성공적으로 완료되었습니다.');
      setHasExtended(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        '연장 신청 중 오류가 발생했습니다. 다시 시도해주세요.';
      console.error('연장 신청 실패:', error);
      alert(`오류: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderButtonLabel = () => {
    if (isSubmitting) return '신청 중...';
    if (hasExtended) return '신청 완료';
    return '연장 신청';
  };

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
              <ExtendBtn
                onClick={handleExtendRequest}
                disabled={isSubmitting || hasExtended}
              >
                {renderButtonLabel()}
              </ExtendBtn>
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
