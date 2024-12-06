import postNotebookInfo from 'api/notebook/postNotebookInfo';
import Register from 'components/common/Register';
import React from 'react';
import { useAuth } from 'api/context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const NotebookRegLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      console.log('전달하는 FormData 내용:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      await postNotebookInfo(formData, user);
      alert('노트북 정보가 성공적으로 등록되었습니다.');
      navigate('/notebook/list');
    } catch (error) {
      console.error('노트북 등록 실패: ', error.message);
      alert(error.message);
    }
  };

  return <Register onSubmit={onSubmit} />;
};

export default NotebookRegLayout;
