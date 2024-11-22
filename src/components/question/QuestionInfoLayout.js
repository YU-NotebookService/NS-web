import getQuestionInfo from 'api/question/getQuestionInfo'
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState } from 'react';
import { AnswerContent } from 'styles/question/QuestionList-styled';
import { useNavigate, useParams } from 'react-router-dom';

function QuestionInfoLayout() {
  const navigate = useNavigate();

  const goToQuestionList = () => {
    navigate('/question/list');
  };

  const { questionId } = useParams();
  const [questionInfo, setQuestionInfo] = useState({
    title: '',
    content: '',
    state: false,
    answer: '',
    imgUrl: [],
  });

  const fetchQuestionInfo = useCallback(async () => {
    try {
      const response = await getQuestionInfo({ questionId });
      await new Promise((resolve) => setTimeout(resolve, 500));

      // imgUrl이 배열이 아닐 경우 처리
      const normalizedResponse = {
        ...response,
        imgUrl: Array.isArray(response.imgUrl)
          ? response.imgUrl
          : [response.imgUrl], // 배열로 변환
      };

      setQuestionInfo(normalizedResponse);
    } catch (error) {
      console.error('게시글을 불러오는 데 실패하였습니다:', error.message);
    }
  }, [questionId]);

  useEffect(() => {
    fetchQuestionInfo();
  }, [fetchQuestionInfo]);

  if (!questionInfo.model) return <LoadingBar />;

  return (
    <>
      <Detail
        data={questionInfo}
        goToList={goToQuestionList}
      />
      <AnswerContent>답변이 없습니다</AnswerContent>
    </>
  );
}

export default QuestionInfoLayout;