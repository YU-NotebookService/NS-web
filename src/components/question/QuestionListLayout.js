import List from 'components/common/list/List';
import { StateText } from 'styles/question/QuestionList-styled';

function QuestionListLayout() {


  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'user' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
    { label: '번호', width: '10%' },
    { label: '제목', width: '50%', key: 'title' },
    { label: '작성자', width: '15%', key: 'user' },
    { label: '작성일', width: '25%', key: 'date' },
    { label: '답변상태', width: '15%', key: 'state' },
  ];

  const questionData = [
    {
      title: '제품에 문제가 있습니다',
      user: 'tmd',
      date: '2024-09-03',
      state: <StateText>답변완료</StateText>
    },
  ];

  return (
    <>
      <List
        itemText='개의 게시물이 등록되어 있습니다.'
        columns={columns}
        currentData={questionData}
        buttonText="글쓰기"
      />
    </>
  );
}

export default QuestionListLayout;
