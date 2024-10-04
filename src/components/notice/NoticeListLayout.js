import List from 'components/common/list/List';

function NoticeListLayout() {
  const columns = [
    { label: '번호', width: '10%' },
    { label: '제목', width: '65%', key: 'title' },
    { label: '작성자', width: '15%', key: 'writer' },
    { label: '작성일', width: '10%', key: 'dateOfPreparation' },
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
        currentData={noticeData}
        buttonText="글쓰기"
      />
    </>
  );
}

export default NoticeListLayout;
