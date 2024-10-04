import Banner from 'components/common/Banner';
import React from 'react';
import { Wrapper } from 'styles/common/List-styled';
import myPageBanner from 'assets/mypage/myPageBanner.png';
import { Content } from 'styles/notice/NoticeList-styled';
import Title from 'components/common/Title';
import MyPageLayout from 'components/mypage/MyPageLayout';

const MyPage = () => {
  return (
    <Wrapper>
      <Banner data={myPageBanner} text="마이 페이지" />
      <Content className="Content">
        <Title
          locationText={['마이 페이지']}
          titleText={'반갑습니다, 홍길동님!'}
        />
        <MyPageLayout />
      </Content>
    </Wrapper>
  );
};

export default MyPage;
