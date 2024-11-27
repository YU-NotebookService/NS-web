import getNotebookInfo from 'api/notebook/getNotebookInfo';
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApplyBtn } from 'styles/notebook/NotebookInfo-styled';

const NotebookInfoLayout = () => {
  const navigate = useNavigate();

  const goToNotebookList = () => {
    navigate('/notebook/list');
  };

  const { notebookId } = useParams();
  const [notebookInfo, setNotebookInfo] = useState({
    model: '',
    manufactureDate: '',
    os: '',
    size: '',
    content: '',
    imgUrl: [], // 초기값을 빈 배열로 설정
  });

  const fetchNotebookInfo = useCallback(async () => {
    try {
      const response = await getNotebookInfo({ notebookId });
      await new Promise((resolve) => setTimeout(resolve, 500));

      // imgUrl이 배열이 아닐 경우 처리
      const normalizedResponse = {
        ...response,
        imgUrl: Array.isArray(response.imgUrl)
          ? response.imgUrl
          : [response.imgUrl], // 배열로 변환
      };

      setNotebookInfo(normalizedResponse);
    } catch (error) {
      console.error('노트북 정보를 불러오는 데 실패하였습니다:', error.message);
    }
  }, [notebookId]);

  useEffect(() => {
    fetchNotebookInfo();
  }, [fetchNotebookInfo]);

  if (!notebookInfo.model) return <LoadingBar />;

  return (
    <>
      <Detail data={notebookInfo} goToList={goToNotebookList} />
      <ApplyBtn>신청하기</ApplyBtn>
    </>
  );
};

export default NotebookInfoLayout;
