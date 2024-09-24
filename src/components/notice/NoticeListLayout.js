import List from '../../components/common/list/List';

function NoticeListLayout() {
  
  
  const columns = [
    { label: '번호', width: '5%'},
    { label: '제목', width: '50%', key: 'title'},
    { label: '작성자', width: '15%', key: 'user'},
    { label: '작성일', width: '25%', key: 'date'},
    { label: '답변상태', width: '10%', key: 'state'},
  ];

  const noticeData = Array(28).fill({
    title: '★☆ 컴퓨터학부 노트북 대여 시 주의사항 ☆★',
    writer: '관리자',
    dateOfPreparation: '24-09-04',
  });
  

  return (  
    <>
      <List 
        itemText="개의 게시물이 등록되어 있습니다." 
        columns={columns} 
        currentData={Data} 
        buttonText="글쓰기" 
      />
    </>
  );
}


export default NoticeListLayout;