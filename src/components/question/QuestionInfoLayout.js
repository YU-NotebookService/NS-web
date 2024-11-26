import getQuestionInfo from 'api/question/getQuestionInfo'
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState } from 'react';
import { AnswerContent } from 'styles/question/QuestionList-styled';
import { useNavigate, useParams } from 'react-router-dom';

function QuestionInfoLayout() {
  const navigate = useNavigate();
  const { questionId } = useParams();

  const [questionInfo, setQuestionInfo] = useState({
    title: '',
    content: '',
    state: false, // state는 초기값을 false로 설정
    answer: null,
    imgUrl: [], // 이미지 URL 배열로 초기화
  });

  const goToQuestionList = () => {
    navigate('/question/list');
  };

  const fetchQuestionInfo = useCallback(async () => {
    try {
      const response = await getQuestionInfo({ questionId });
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩바 효과를 위해 지연

      // 응답 데이터 처리
      const normalizedResponse = {
        title: response.title || '',
        content: response.content || '',
        state: response.state || false,
        answer: response.answer,
        imgUrl: [
          response.imageUrl || null,
          response.imageUrl2 || null,
          response.imageUrl3 || null,
        ].filter(Boolean), // 이미지 URL이 null이 아닌 경우만 포함
      };

      setQuestionInfo(normalizedResponse);
    } catch (error) {
      console.error('질문 정보를 불러오는 데 실패했습니다:', error.message);
    }
  }, [questionId]);

  useEffect(() => {
    fetchQuestionInfo();
  }, [fetchQuestionInfo]);

  if (!questionInfo.title) return <LoadingBar />; // 제목이 없으면 로딩바 표시

  return (
    <>
      <Detail data={questionInfo} goToList={goToQuestionList} />
      <AnswerContent>
        {questionInfo.answer ? questionInfo.answer : '답변이 없습니다'}
      </AnswerContent>
    </>
  );
}

export default QuestionInfoLayout;