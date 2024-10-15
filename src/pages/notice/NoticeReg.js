import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import noticeBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import NoticeRegLayout from 'components/notice/NoticeRegLayout';

const NoticeReg = () => {
  return (
    <Wrapper>
      <Banner data={noticeBanner} text="공지사항" />
      <Content className="Content">
        <Title
          locationText={['공지사항', '공지사항 등록']}
          titleText={'공지사항 등록'}
        />
        <NoticeRegLayout />
      </Content>
    </Wrapper>
  );
};

export default NoticeReg;
