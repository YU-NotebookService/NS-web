import { useAuth } from 'api/context/AuthProvider';
import delNotebookInfo from 'api/notebook/delNotebookInfo';
import getNotebookInfo from 'api/notebook/getNotebookInfo';
import Detail from 'components/common/Detail';
import { LoadingBar } from 'components/common/LoadingBar';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ApplyBtn } from 'styles/notebook/NotebookInfo-styled';
import postRentalNotebook from 'api/notebook/postRentalNotebook';

const NotebookInfoLayout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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
    imgUrl: [],
  });

  const fetchNotebookInfo = useCallback(async () => {
    try {
      const response = await getNotebookInfo({ notebookId });
      await new Promise((resolve) => setTimeout(resolve, 500));

      const normalizedResponse = {
        ...response,
        imgUrl: Array.isArray(response.imgUrl)
          ? response.imgUrl
          : [response.imgUrl],
      };

      setNotebookInfo(normalizedResponse);
    } catch (error) {
      console.error('노트북 정보를 불러오는 데 실패하였습니다:', error.message);
    }
  }, [notebookId]);

  useEffect(() => {
    fetchNotebookInfo();
  }, [fetchNotebookInfo]);

  const deleteNotebookInfo = async () => {
    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        await delNotebookInfo(notebookId, user);
        alert('삭제되었습니다.');
        goToNotebookList();
      } catch (error) {
        console.error('삭제에 실패하였습니다:', error.message);

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
  const onSubmitRental = async () => {
    if (!notebookId) {
      alert('노트북 ID가 없습니다.');
      return;
    }

    const requestData = {
      userId: user?.id || '',
      notebookId,
      rentalDate: new Date().toISOString(),
    };

    try {
      const response = await postRentalNotebook(requestData, notebookId);
      console.log('노트북 대여 성공:', response);
      alert('노트북이 성공적으로 대여되었습니다.');
      navigate('/mypage');
    } catch (error) {
      console.error('노트북 대여 실패:', error.message);
      alert(error.message || '대여 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };
  if (!notebookInfo.model) return <LoadingBar />;

  return (
    <>
      <Detail
        data={notebookInfo}
        goToList={goToNotebookList}
        deletePost={deleteNotebookInfo}
      />
      <ApplyBtn onClick={onSubmitRental}>신청하기</ApplyBtn>
    </>
  );
};

export default NotebookInfoLayout;
