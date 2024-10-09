import Detail from 'components/common/Detail';
import React from 'react';
import { AnswerContent } from 'styles/question/QuestionList-styled';
import { useNavigate } from 'react-router-dom';

function QuestionInfoLayout() {
  const navigate = useNavigate();

  const goToQuestionList = () => {
    navigate('/question/list');
  };

  return (
    <>
      <Detail
        headLineText={'제품에 문제가 있습니다'}
        writer={'tmd'}
        createdAt={'2024-09-03 18:49'}
        contentText={'아래와 같이 문제가 있습니다'}
        imgUrl={imgUrl}
        goToList={goToQuestionList}
      />
      <AnswerContent>답변이 없습니다</AnswerContent>
    </>
  );
}

const imgUrl = [];

export default QuestionInfoLayout;