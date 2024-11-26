import Register from 'components/common/Register';
import postQuestionInfo from 'api/question/postQuestionInfo';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';
import { styled } from "styled-components";

const QuestionRegLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      console.log('전달하는 FormData 내용:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      const response = await postQuestionInfo(formData, user); // FormData 전달
      console.log('게시글 등록 성공: ', response);
      alert('게시글 성공적으로 등록되었습니다.');
      navigate('/question/list');
    } catch (error) {
      console.error('게시글 등록 실패: ', error.message);
      alert(error.message);
    }
  };

  return <Register onSubmit={onSubmit} />;
};


export default QuestionRegLayout;