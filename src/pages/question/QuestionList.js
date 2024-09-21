import React from 'react';
import { Wrapper, Content } from '../../styles/list/List-styled';
import Banner from '../../components/list/Banner';
import Title from '../../components/list/listComponent/Title';
import List from '../../components/list/listComponent/List';

function QuestionList() {
  const bannerImage = '../../assets/notebook/notebookBanner.png';
  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%' },
    { label: '작성자', width: '20%' },
    { label: '작성일', width: '20%' },
    { label: '답변 상태', width: '20%' },
  ];

  const questionData = [

  ]

  return (  
    <Wrapper>
      <Banner backgroundImage={bannerImage} />
        <Content className="Content">
        <Title
          locationText={"1:1문의"}
          titleText={"1:1문의"}
        />
        <List 
          itemText="개의 게시물이 등록되어 있습니다." 
          columns={columns} 
          data={questionData} 
          buttonText="질문 등록" 
        />
      </Content>
    </Wrapper>
  );
}

export default QuestionList;