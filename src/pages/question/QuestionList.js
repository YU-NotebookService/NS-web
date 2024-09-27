import React from 'react';
import { Wrapper, Content } from '../../styles/common/List-styled';
import Banner from '../../components/common/Banner';
import Title from '../../components/common/Title';
import QuestionListLayout from 'components/question/QuestionListLayout';
import questionBanner from '../../assets/notebook/notebookBanner.png';

function QuestionList() {
  return (
    <Wrapper>
      <Banner data={questionBanner} text="1:1문의" />
      <Content className="Content">
        <Title locationText={['1:1문의']} titleText={'1:1문의'} />
        <QuestionListLayout />
      </Content>
    </Wrapper>
  );
}

export default QuestionList;
