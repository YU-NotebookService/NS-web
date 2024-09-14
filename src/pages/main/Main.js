import React from 'react';
import Banner from '../../components/main/Banner';
import MainBoxs from '../../components/main/MainBoxs';
import { Wrapper, Content } from '../../styles/Main-styled';

const Main = () => {
  return (
    <Wrapper>
      <Content className="Content">
        <Banner />
        <MainBoxs />
      </Content>
    </Wrapper>
  );
};

export default Main;
