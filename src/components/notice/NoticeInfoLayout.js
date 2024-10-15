import Detail from 'components/common/Detail';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeInfoLayout = () => {
  const navigate = useNavigate();

  const goToNoticeList = () => {
    navigate('/notice/list');
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const text =
    '재학생 학생증 수령 안내 \n\n학생증은 발급순으로 학부 행정실에 도착하며 대상 학생에게 SMS/PUSH로 수령안내하고 있습니다.\n따라서 SMS/PUSH 수신 확인을 잘 해주시기 바랍니다.\n학부 행정실에서 따로 안내 받지 않은 경우 학생증 발급 여부는 학부 행정실에서 알 수 없습니다.\n\n학생증 수령 장소 : 컴퓨터학부 행정실 IT관(E21)\n\n122호학생증 수령 시 신분증 혹은 모바일 신분증 확인 필수입니다.\n신분증 없이 학생증 수령 어렵습니다.';

  return (
    <>
      <Detail
        headLineText={'★☆ 컴퓨터학부 노트북 대여 시 주의사항 ☆★'}
        writer={'관리자'}
        createdAt={'2024-09-03 18:49'}
        contentText={formatText(text)}
        goToList={goToNoticeList}
      />
    </>
  );
};

export default NoticeInfoLayout;
