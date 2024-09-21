import React from 'react';
import { CardWrapper } from '../../../styles/common/List-styled';

const InfoCard = ({ el, index}) => {
  return (
    <CardWrapper>
      <div style={{ width: '5%' }}>{index + 1}</div>
      <div style={{ width: '50%', textAlign: 'start', paddingLeft: '' }}>
        {el.title}
      </div>
      <div style={{ width: '15%' }}>{el.user}</div>
      <div style={{ width: '25%' }}>{el.date}</div>
      <div style={{ width: '10%', color: 'var(--main--color)'}}>{el.state}</div>
    </CardWrapper>
  );
};

export default InfoCard;
