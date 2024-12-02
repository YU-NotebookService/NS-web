import Register from "components/common/Register";
import { useAuth } from "api/context/AuthProvider";
import putQuestionInfo from "api/question/putQuestionInfo";
import { useNavigate, useParams } from "react-router-dom";

const QuestionModifyLayout = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { questionId } = useParams();

    const onSubmit = async (formData) => {
        try {
            console.log('전달하는 FormData 내용:');
            formData.forEach((value, key) => {
                console.log(`${key}:`, value);
            });
            const response = await putQuestionInfo(questionId, formData, user); // FormData 전달
            console.log('게시글 정보 수정 성공: ', response);
            alert('게시글 정보가 성공적으로 수정되었습니다.');
            navigate('/question/list');
        } catch (error) {
            console.error('게시글 수정 실패: ', error.message);
            alert(error.message);
        }
    };

    return <Register onSubmit={onSubmit} />;
};

export default QuestionModifyLayout;