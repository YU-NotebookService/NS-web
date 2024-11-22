import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import notebookBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import NotebookModifyLayout from 'components/notebook/NotebookModifyLayout';

const NotebookModify = () => {
  return (
    <Wrapper>
      <Banner data={notebookBanner} text="노트북 대여" />
      <Content className="Content">
        <Title
          locationText={['노트북 대여', '정보 수정']}
          titleText={'노트북 정보 수정'}
        />
        <NotebookModifyLayout />
      </Content>
    </Wrapper>
  );
};

export default NotebookModify;
