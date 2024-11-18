import postNotebookInfo from 'api/notebook/postNotebookInfo';
import Register from 'components/common/Register';
import React from 'react';

const NotebookRegLayout = () => {
  const onSubmit = async (formData) => {
    try {
      const response = await postNotebookInfo(formData);
      console.log('노트북 정보 등록 성공: ', response);
      alert('노트북 정보가 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error('노트북 등록 실패: ', error.message);
      alert(error.message);
    }
  };
  return <Register onSubmit={onSubmit} />;
};

export default NotebookRegLayout;
