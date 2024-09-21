import React from 'react';
import NoticeList from './NoticeList';

const Notice = () => {
  const moveToWrite = () => {
    navigate('/write');
  };
  return (
    <Wrapper>
      <Banner />
      <NoticeList />
      <button onClick={moveToWrite}>글쓰기</button>
    </Wrapper>
  );
};

export default Notice;
