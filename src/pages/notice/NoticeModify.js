import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import notebookBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import NoticeModifyLayout from 'components/notice/NoticeModifyLayout';

const NoticeModify = () => {
  return (
    <Wrapper>
      <Banner data={notebookBanner} text="공지사항" />
      <Content className="Content">
        <Title
          locationText={['공지사항', '글 수정']}
          titleText={'공지사항 수정'}
        />
        <NoticeModifyLayout />
      </Content>
    </Wrapper>
  );
};

export default NoticeModify;
