import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import questionBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import QuestionRegLayout from 'components/question/QuestionRegLayout';

function QuestionReg() {
  return (
    <Wrapper>
      <Banner data={questionBanner} text="1:1문의" />
      <Content className="Content">
        <Title
          locationText={['1:1문의', '문의 등록']}
          titleText={'문의 등록'}
        />
        <QuestionRegLayout />
      </Content>
    </Wrapper>
  );
}

export default QuestionReg;
