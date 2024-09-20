import React from 'react';
import { Wrapper, Content } from '../../styles/notebook/NotebookList-styled';
import Banner from '../../components/notebook/Banner';
import Title from '../../components/notebook/notebookList/Title';
import List from '../../components/notebook/notebookList/List';

const NotebookList = () => {
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

export default NotebookList;
