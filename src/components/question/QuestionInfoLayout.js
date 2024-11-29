import { useAuth } from 'api/context/AuthProvider';
import getQuestionInfo from 'api/question/getQuestionInfo'
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState } from 'react';
import delQuestionInfo from 'api/question/delQuestionInfo';
import { AnswerContent } from 'styles/question/QuestionList-styled';
import { useNavigate, useParams } from 'react-router-dom';

function QuestionInfoLayout() {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const user = useAuth();

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

      const questionData = response.questions.find((q) => q.questionId === questionIdParam);

      if (!response.questions || response.questions.length === 0) {
        console.error('questions 배열이 비어 있거나 존재하지 않습니다.');
        alert('질문 데이터가 없습니다.');
        return;
      }

      const normalizedResponse = {
        title: questionData.title || '',
        content: questionData.content || '',
        state: questionData.state || false,
        answer: questionData.answer || null,
        imgUrl: [
          questionData.imageUrl || null,
          questionData.imageUrl2 || null,
          questionData.imageUrl3 || null,
        ].filter(Boolean),
        writer: questionData.writer || '관리자',
      };

      console.log('정규화된 데이터:', normalizedResponse);
      setQuestionInfo(normalizedResponse);
    } catch (error) {
      console.error('질문 정보를 불러오는 데 실패했습니다:', error.message);
    }
  }, [questionId]);

  useEffect(() => {
    fetchQuestionInfo();
  }, [fetchQuestionInfo]);

  const deleteQuestionInfo = async () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await delQuestionInfo(questionId, user); // API 호출
        alert('삭제되었습니다.');
        goToQuestionList(); // 목록 페이지로 이동
      } catch (error) {
        console.error('삭제에 실패하였습니다:', error.message);

        // 오류 메시지를 사용자에게 표시
        if (error.message.includes('로그인')) {
          alert('로그인이 필요합니다. 로그인 후 다시 시도해주세요.');
        } else if (error.message.includes('권한')) {
          alert('삭제 권한이 없습니다. 관리자에게 문의하세요.');
        } else if (error.message.includes('네트워크')) {
          alert(
            '네트워크 문제 또는 서버 오류가 발생했습니다. 다시 시도해주세요.',
          );
        } else {
          alert('알 수 없는 오류가 발생했습니다. 다시 시도해주세요.');
        }
      }
    }
  };

  if (!questionInfo.title) return <LoadingBar />; // 제목이 없으면 로딩바 표시

  return (
    <>
      <Detail data={questionInfo}
        goToList={goToQuestionList}
        deletePost={deleteQuestionInfo}
      />
      <AnswerContent>
        {questionInfo.answer ? questionInfo.answer : '답변이 없습니다'}
      </AnswerContent>
    </>
  );
}

export default QuestionInfoLayout;