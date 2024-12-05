import { useEffect, useState, useCallback } from "react";
import getQuestionList from 'api/mypage/getQuestionList';
import {
  MyPageQuestionInfo,
  InfoTitle,
  InfoContent,
  InfoText,
  ListData,
  InfoList,
} from "styles/MyPage-styled";
import { useNavigate } from "react-router-dom";

const MyQuestionList = () => {
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchQuestionList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getQuestionList(); // API 호출
      setQuestionList(response || []); // 데이터 저장
    } catch (error) {
      console.error("문의 리스트를 불러오는 데 실패했습니다:", error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestionList();
  }, [fetchQuestionList]);

  const handleTitleClick = (questionId) => {
    navigate(`/question/info/${questionId}`); // 상세 페이지 경로로 이동
  };

  return (
    <MyPageQuestionInfo>
      <InfoTitle>내 문의 리스트</InfoTitle>
      <InfoContent>
        {isLoading ? (
          <InfoText>로딩 중...</InfoText>
        ) : questionList.length > 0 ? (
          questionList.map((question, index) => (
            <ListData key={index}>
              <InfoList
                onClick={() => handleTitleClick(question.questionId)} // 제목 클릭 시 상세 페이지로 이동
                style={{ cursor: "pointer" }}
              >
                {question.title}
              </InfoList>
              <InfoList>
                {new Date(question.date).toLocaleDateString("ko-KR")}
              </InfoList>
              <InfoList>
                {question.state ? "답변 완료" : "답변 없음"}
              </InfoList>
            </ListData>
          ))
        ) : (
          <InfoText>문의 내역이 없습니다.</InfoText>
        )}
      </InfoContent>
    </MyPageQuestionInfo>
  );
};

export default MyQuestionList;


