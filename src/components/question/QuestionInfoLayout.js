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
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연

      const questionIdParam = parseInt(questionId, 10);

      // 데이터 구조를 확인하고 필요한 데이터 추출
      const questionData = response.questions.find((q) => q.questionId === questionIdParam);

      if (!response.questions || response.questions.length === 0) {
        console.error('questions 배열이 비어 있거나 존재하지 않습니다.');
        alert('질문 데이터가 없습니다.');
        return;
      }

      const normalizedResponse = {
        title: questionData.title || '', // 제목
        content: questionData.content || '', // 내용
        state: questionData.state || false, // 상태
        answer: questionData.answer || null, // 답변
        imgUrl: [
          questionData.imageUrl || null,
          questionData.imageUrl2 || null,
          questionData.imageUrl3 || null,
        ].filter(Boolean), // null 값을 제거
        writer: questionData.writer || '관리자', // 작성자
      };

      console.log('정규화된 데이터:', normalizedResponse); // 디버깅용 로그
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