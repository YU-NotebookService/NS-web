import React from 'react';
import { CardWrapper } from 'styles/notice/NoticeList-styled';
const InfoCard = ({ el, index }) => {
  return (
    <CardWrapper>
      <div style={{ width: '10%' }}>{index}</div>
      <div style={{ width: '65%', textAlign: 'start', paddingLeft: '40px' }}>
        {el.title}
      </div>
      <div style={{ width: '15%' }}>{el.writer}</div>
      <div style={{ width: '10%' }}>{el.dateOfPreparation}</div>
    </CardWrapper>
  );
};

export default InfoCard;
