import React from 'react';
import { CardWrapper } from '../../../styles/notebook/NotebookList-styled';

const InfoCard = ({ el, index }) => {
  return (
    <CardWrapper>
      <div style={{ width: '5%' }}>{index + 1}</div>
      <div style={{ width: '60%', textAlign: 'start', paddingLeft: '' }}>
        {el.model}
      </div>
      <div style={{ width: '25%' }}>{el.os}</div>
      <div style={{ width: '10%' }}>{el.rentalStatus}</div>
    </CardWrapper>
  );
};

export default InfoCard;
