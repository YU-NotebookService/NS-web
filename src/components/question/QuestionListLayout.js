import List from '../../components/common/list/List';
import { styled } from "styled-components";

function QuestionListLayout() {
  
  
  const columns = [
    { label: '번호', width: '5%'},
    { label: '제목', width: '50%', key: 'title'},
    { label: '작성자', width: '15%', key: 'user'},
    { label: '작성일', width: '25%', key: 'date'},
    { label: '답변상태', width: '10%', key: 'state'},
  ];

  const questionData = [
    {
      title: "td",
      user: "asd",
      date: "asdasdsa",
      state: <StateText>답변완료</StateText>
    },
  ]

  return (  
    <>
      <List 
        itemText="개의 게시물이 등록되어 있습니다." 
        columns={columns} 
        data={questionData} 
        buttonText="글쓰기" 
      />
    </>
  );
}

const StateText = styled.span`
  color: var(--main-color);
  font-weight: bold;
`;

export default QuestionListLayout;