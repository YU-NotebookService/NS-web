import getQuestionList from 'api/question/getQuestionList';
import List from 'components/common/list/List';
import { LoadingBar } from 'components/common/LoadingBar';
import { useCallback, useEffect, useState } from 'react';
import { StateText } from 'styles/question/QuestionList-styled';

function QuestionListLayout() {


  const columns = [
    { label: '번호', width: '10%', key: 'index' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'user' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];

  const [questionList, setQuestionList] = useState();


  const fetchQuestionList = async () => {
    try {
      const data = await getQuestionList(); // API 호출
      await new Promise((resolve) => setTimeout(resolve, 500)); // 로딩 지연
      console.log('API 응답 데이터:', data);

      if (data && data.questions) {
        // 데이터 변환
        const transformedQuestions = data.questions.map((question, index) => ({
          index: Number(index + 1), // 번호는 1부터 시작
          questionId: question.questionId, // API에서 받은 고유 ID
          title: question.title || '제목 없음', // 기본값 설정
          writer: question.writer || '', // 작성자 기본값
          date: question.date || '날짜 없음', // 날짜 기본값
          state: (<StateText>{question.state || '답변 없음'}</StateText>)// 문자열로 우선 처리
        }));

        console.log('변환된 질문 데이터:', transformedQuestions);
        setQuestionList(transformedQuestions);
      } else {
        throw new Error('공지사항 데이터가 없습니다.');
      }
    } catch (err) {
      console.error('공지사항 불러오기 오류:', err);
    }
  };


  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  if (!questionList) return <LoadingBar />;


  return (
    <>
      <List
        itemText="개의 게시물이 등록되어 있습니다."
        columns={columns}
        currentData={questionList}
        buttonText="글쓰기"

      />
    </>
  );
}

export default QuestionListLayout;
