import React from 'react';
import { Wrapper, Content } from 'styles/common/List-styled';
import Banner from 'components/common/Banner';
import Title from 'components/common/Title';
import questionBanner from 'assets/notebook/notebookBanner.png';
import QuestionInfoLayout from 'components/question/QuestionInfoLayout';

function QuestionInfo() {
  return (
    <Wrapper>
      <Banner data={questionBanner} text="1:1문의" />
      <Content className="Content">
        <Title
          locationText={['1:1문의', '상세 페이지']}
          titleText={'1:1문의 상세 페이지'}
        />
        <QuestionInfoLayout />
      </Content>
    </Wrapper>
  );
}

export default QuestionInfo;
