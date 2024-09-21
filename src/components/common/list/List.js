import React from 'react';
import {
  Bottom,
  HeadLine,
  ListCount,
  ListWrapper,
  Top,
} from '../../../styles/common/List-styled';
import SearchBox from '../SearchBox';
import InfoCard from './InfoCard';
import Button from '../Button';

const List = ({ itemText, columns, data, buttonText }) => {
  return (
    <ListWrapper>
      <Top>
        <ListCount>
          총&nbsp;
          <span style={{ color: 'var(--main-color)' }}>
            {data.length}
          </span>
          {itemText}
        </ListCount>
        <SearchBox />
      </Top>
      <HeadLine>
        {columns.map((column, index) => (
          <div key={index} style={{ width: column.width }}>
            {column.label}
          </div>
        ))}
      </HeadLine>
      {data.map((el, index) => {
        return <InfoCard el={el} index={index} />;
      })}
      <Bottom>
        <Button style={{ padding: '14px 40px' }}>{buttonText}</Button>
      </Bottom>
    </ListWrapper>
  );
};

export default List;