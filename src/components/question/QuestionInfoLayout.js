import Button from 'components/common/Button';
import Detail from 'components/common/Detail';
import React from 'react';
import { styled } from "styled-components";
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

const AnswerContent = styled.div`
  margin-top: -50px;
  padding: 30px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;  
  border-bottom: 1px solid #e1e1e1;
`;

export default QuestionInfoLayout;