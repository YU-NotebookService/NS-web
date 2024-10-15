import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import noticeBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import Banner from 'components/common/Banner';
import NoticeInfoLayout from 'components/notice/NoticeInfoLayout';

const NoticeInfo = () => {
  return (
    <Wrapper>
      <Banner data={noticeBanner} text="공지사항" />
      <Content className="Content">
        <Title
          locationText={['공지사항', '상세 페이지']}
          titleText={'공지사항 상세 페이지'}
        />
        <NoticeInfoLayout />
      </Content>
    </Wrapper>
  );
};

export default NoticeInfo;
