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
  const [notebookInfo, setNotebookInfo] = useState();

  const fetchNotebookInfo = useCallback(async () => {
    try {
      const response = await getNotebookInfo({ notebookId });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setNotebookInfo(response);
    } catch (error) {
      console.error('노트북 정보를 불러오는 데 실패하였습니다:', error.message);
    }
  }, [notebookId]);

  useEffect(() => {
    fetchNotebookInfo();
  }, [fetchNotebookInfo]);

  if (!notebookInfo) return <LoadingBar />;

  return (
    <>
      <Detail
        headLineText={notebookInfo.model}
        writer={'관리자'}
        createdAt={'2024-09-03 18:49'}
        os={notebookInfo.os}
        contentText={'아래 사진과 같은 노트북입니다.'}
        imgUrl={imgUrl}
        goToList={goToNotebookList}
      />
      <ApplyBtn>신청하기</ApplyBtn>
    </>
  );
};

const imgUrl = [
  'https://b2c-contenthub.com/wp-content/uploads/2024/03/Alienware-m16-R2-starfield.jpg?quality=50&strip=all',
  'https://i.pcmag.com/imagery/roundups/01LGL23MDBwSqivAsdTF3Ui-38..v1698792495.jpg',
];

export default NotebookInfoLayout;
