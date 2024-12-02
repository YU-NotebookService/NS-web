import { useAuth } from 'api/context/AuthProvider';
import getQuestionInfo from 'api/question/getQuestionInfo'
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import delQuestionInfo from 'api/question/delQuestionInfo';
import { AnswerContent, ReplyContent, SubmitBtn } from 'styles/question/QuestionList-styled';
import { useNavigate, useParams } from 'react-router-dom';
import postQuestionReply from 'api/question/postQuestionReply';

function QuestionInfoLayout() {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const { user } = useAuth();
  const replyInputRef = useRef();

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

  const handleReplySubmit = async () => {
    const data = replyInputRef.current?.value;

    try {
      const response = await postQuestionReply({ questionId: String(questionId), answer: String(data) }, user);
      alert('답변이 제출되었습니다.');
      setQuestionInfo((prev) => ({ ...prev, answer: data }));
    } catch (error) {
      console.error('API 호출 중 에러 발생:', error);

      if (error.response) {
        console.error('서버 응답 데이터:', error.response.data);
        console.error('응답 상태 코드:', error.response.status);
        alert(`서버 오류: ${error.response.data.message || '알 수 없는 오류입니다.'}`);
      } else if (error.request) {
        console.error('요청 자체가 전송되지 않음:', error.request);
        alert('네트워크 문제로 요청이 실패했습니다.');
      } else {
        console.error('설정 오류 발생:', error.message);
        alert(`클라이언트 오류: ${error.message}`);
      }
    }
  };

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
        {user?.role == 'ADMIN' ? (
          <>
            <ReplyContent
              placeholder="답변을 입력하세요"
              value={questionInfo.answer || null}
              ref={replyInputRef}
            />
            <SubmitBtn onClick={handleReplySubmit}>답변</SubmitBtn>
          </>
        ) : (
          questionInfo.answer ? `답변 내용: ${questionInfo.answer}` : '답변이 없습니다'
        )}
      </AnswerContent>
    </>
  );
}

export default QuestionInfoLayout;