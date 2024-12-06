import Register from 'components/common/Register';
import postQuestionInfo from 'api/question/postQuestionInfo';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';

const QuestionRegLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      await postQuestionInfo(formData, user);
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
