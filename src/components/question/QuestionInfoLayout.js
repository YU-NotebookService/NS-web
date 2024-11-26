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
    state: '',
    answer: null,
    imgUrl: [], // 초기값을 빈 배열로 설정
  });

  const goToQuestionList = () => {
    navigate('/question/list');
  };

  const fetchQuestionInfo = useCallback(async () => {
    try {
      const response = await getQuestionInfo({ questionId });
      await new Promise((resolve) => setTimeout(resolve, 500));

      const normalizedResponse = {
        ...response,
        imgUrl: Array.isArray(response.imgUrl)
          ? response.imgUrl
          : [response.imgUrl], // 배열로 변환
      };

      setQuestionInfo(normalizedResponse);
    } catch (error) {
      console.error('노트북 정보를 불러오는 데 실패하였습니다:', error.message);
    }
  }, [questionId]);

  useEffect(() => {
    fetchQuestionInfo();
  }, [fetchQuestionInfo]);

  if (!questionInfo) return <LoadingBar />;

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