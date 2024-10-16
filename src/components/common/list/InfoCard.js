import React from 'react';
import { CardWrapper } from 'styles/common/List-styled';

const InfoCard = ({ el, index, columns }) => {
  return (
    <CardWrapper>
      <div style={{ width: columns[0].width, textAlign: 'center' }}>
        {index}
      </div>
      {columns.map((column, colIndex) =>
        colIndex === 0 ? null : (
          <div
            key={colIndex}
            style={{
              width: column.width,
              textAlign: colIndex === 1 ? 'start' : 'center',
            }}
          >
            {el[column.key] === 'AVAILABLE'
              ? '대여가능'
              : el[column.key] === 'RESERVATION'
                ? '대여불가'
                : el[column.key]}
          </div>
        ),
      )}
    </CardWrapper>
  );
};

export default InfoCard;
