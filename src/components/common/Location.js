import React from 'react';
import { Wrapper } from '../../styles/common/Location-styled';

const Location = ({ locations }) => {
  return (
    <Wrapper>
      HOME
      {locations.map((el, index) => {
        return index === locations.length - 1 ? (
          <>
            &gt; <span style={{ color: 'black', fontWeight: '500' }}>{el}</span>
          </>
        ) : (
          <>&gt; {el}</>
        );
      })}
    </Wrapper>
  );
};

export default Location;
