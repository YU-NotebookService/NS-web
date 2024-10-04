import Detail from 'components/common/Detail';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplyBtn } from 'styles/notebook/NotebookInfo-styled';

const NotebookInfoLayout = () => {
  const navigate = useNavigate();

  const goToNotebookList = () => {
    navigate('/notebook/list');
  };

  return (
    <>
      <Detail
        headLineText={'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)'}
        writer={'관리자'}
        createdAt={'2024-09-03 18:49'}
        os={'Windosws 11'}
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
