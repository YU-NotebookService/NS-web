import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import notebookBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import NotebookRegLayout from 'components/notebook/NotebookRegLayout';

const NotebookReg = () => {
  return (
    <Wrapper>
      <Banner data={notebookBanner} text="노트북 대여" />
      <Content className="Content">
        <Title
          locationText={['노트북 대여', '신규 등록']}
          titleText={'노트북 신규 등록'}
        />
        <NotebookRegLayout />
      </Content>
    </Wrapper>
  );
};

export default NotebookReg;
