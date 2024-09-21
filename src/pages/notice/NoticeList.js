import React from 'react';
import { Wrapper, Content } from '../../styles/notice/NoticeList-styled';
import Banner from '../../components/notice/Banner';
import Title from '../../components/notice/noticeList/Title';
import List from '../../components/notice/noticeList/List';
// TODO: 절대 경로 변경

const NoticeList = () => {
  return (
    <Wrapper>
      <Banner />
      <Content className="Content">
        <Title />
        <List />
      </Content>
    </Wrapper>
  );
};

export default NoticeList;
