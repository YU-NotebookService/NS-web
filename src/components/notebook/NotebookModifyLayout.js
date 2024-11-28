import Register from 'components/common/Register';
import React from 'react';
import { useAuth } from 'api/context/AuthProvider'; // AuthProvider import
import putNotebookInfo from 'api/notebook/putNotebookInfo';
import { useNavigate } from 'react-router-dom';

const NotebookModifyLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (formData, id) => {
    try {
      console.log('전달하는 FormData 내용:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      const response = await putNotebookInfo(id, formData, user); // FormData 전달
      console.log('노트북 정보 수정 성공: ', response);
      alert('노트북 정보가 성공적으로 수정되었습니다.');
      navigate('/notebook/list');
    } catch (error) {
      console.error('노트북 수정 실패: ', error.message);
      alert(error.message);
    }
  };

  return <Register onSubmit={onSubmit} />;
};

export default NotebookModifyLayout;
