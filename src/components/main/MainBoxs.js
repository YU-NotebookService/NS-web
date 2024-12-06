import React from 'react';
import { MainBoxWrapper } from 'styles/Main-styled';
import NoticeBox from 'components/main/NoticeBox';
import { useNavigate } from 'react-router-dom';

const MainBoxs = () => {
  const navigate = useNavigate();

  const goToNoticeList = () => {
    navigate('/notice/list');
  };

  const goToQuestionList = () => {
    navigate('/question/list');
  };
  return (
    <MainBoxWrapper>
      <NoticeBox text={'공지사항'} clickHandler={goToNoticeList} />
      <NoticeBox text={'1:1 문의'} clickHandler={goToQuestionList} />
    </MainBoxWrapper>
  );
};

export default MainBoxs;
