import React from 'react';
import { CardWrapper } from '../../../styles/common/List-styled';

const InfoCard = ({ el, index, columns }) => {
  return (
    <CardWrapper>
      <div style={{width: '5%', textAlign: 'center', marginRight: '-5%'}}>{index + 1}</div>
      {columns.map((column, colIndex) => (
        <div key={colIndex} style={{width: column.width, textAlign: colIndex === 1 ? 'start': 'center' }}>
          {el[column.key]} {}
        </div>
      ))}
    </CardWrapper>
  );
};

export default InfoCard;
