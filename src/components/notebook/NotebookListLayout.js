import List from '../../components/common/list/List';

function NotebookListLayout() {
  
  
  const columns = [
    { label: '번호', width: '5%'},
    { label: '모델명', width: '60%', key: 'model'},
    { label: '운영체제', width: '25%', key: 'os'},
    { label: '대여상태', width: '10%', key: 'rentalStatus'},
  ];

  const nobtebookData = [
    {
      model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
      os: 'Windows 11',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
    {
      model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
      os: 'Windows 11',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
    {
      model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
      os: 'Windows 11',
      rentalStatus: '대여가능',
    },
    {
      model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
      os: 'Windows 11',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
    {
      model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
      os: 'Mac OS',
      rentalStatus: '대여가능',
    },
  ];
  
  return (  
    <>
      <List 
        itemText="개의 게시물이 등록되어 있습니다." 
        columns={columns} 
        data={nobtebookData} 
        buttonText="신규 등록" 
      />
    </>
  );
}

export default NotebookListLayout;