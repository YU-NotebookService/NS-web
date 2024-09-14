import React from 'react';
import { NoticeBoxWrapper, TitleBox } from '../../styles/Main-styled';
import Button from '../common/Button';
import ContentCard from './ContentCard';

const NoticeBox = ({ text, data }) => {
  return (
    <NoticeBoxWrapper>
      <TitleBox>
        {text}
        <Button
          style={{
            fontSize: '30px',
            alignContent: 'center',
            padding: '0px 9px 6px 9px',
          }}
        >
          ┼
        </Button>
      </TitleBox>
      {data.map((el) => {
        return <ContentCard content={el} />;
      })}
    </NoticeBoxWrapper>
  );
};

export default NoticeBox;
