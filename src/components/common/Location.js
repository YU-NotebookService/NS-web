import React from 'react';
import { Wrapper } from 'styles/common/Location-styled';

const Location = ({ locations }) => {
  return (
    <Wrapper>
      HOME
      {locations.map((el, index) => {
        return index === locations.length - 1 ? (
          <span key={index}>
            &gt;
            <span style={{ color: 'black', fontWeight: '500' }}>{el}</span>
          </span>
        ) : (
          <span key={index}>&gt; {el}</span>
        );
      })}
    </Wrapper>
  );
};

export default Location;
