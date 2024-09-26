import React from 'react';
import { Wrapper, Content } from 'styles/common/List-styled';
import Banner from 'components/common/Banner';
import Title from 'components/common/Title';
import notebookBanner from 'assets/notebook/notebookBanner.png';
import NotebookInfoLayout from 'components/notebook/NotebookInfoLayout';

const NotebookInfo = () => {
  return (
    <Wrapper>
      <Banner data={notebookBanner} text="노트북 대여" />
      <Content className="Content">
        <Title
          locationText={['노트북 대여', '노트북 세부 정보']}
          titleText={'노트북 세부 정보'}
        />
        <NotebookInfoLayout />
      </Content>
    </Wrapper>
  );
};

export default NotebookInfo;
