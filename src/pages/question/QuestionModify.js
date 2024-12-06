import Banner from 'components/common/Banner';
import React from 'react';
import { Content, Wrapper } from 'styles/common/List-styled';
import questionBanner from 'assets/notebook/notebookBanner.png';
import Title from 'components/common/Title';
import QuestionModifyLayout from 'components/question/QuestionModifyLayout';

const QuestionModify = () => {
  return (
    <Wrapper>
      <Banner data={questionBanner} text="1:1문의" />
      <Content className="Content">
        <Title
          locationText={['1:1문의', '정보 수정']}
          titleText={'1:1문의 정보 수정'}
        />
        <QuestionModifyLayout />
      </Content>
    </Wrapper>
  );
};

export default QuestionModify;
