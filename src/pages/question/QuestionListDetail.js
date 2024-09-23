import { Wrapper, Content } from '../../styles/common/List-styled';
import Banner from '../../components/common/list/Banner';
import questionBanner from '../../assets/notebook/notebookBanner.png';
import QuestionLayout from '../../components/question/QuestionListLayout'
import styled from "styled-components";

function QuestionListDetail() {
  return (  
    <Wrapper>
      <Banner data={questionBanner} text = "1:1문의"/>
        <Content className="Content">
          <QuestionLayout />
      </Content>
    </Wrapper>
  );
}

export default QuestionListDetail;