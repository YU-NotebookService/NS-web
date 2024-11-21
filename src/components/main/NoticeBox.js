import React from 'react';
import { NoticeBoxWrapper, PlustBtn, TitleBox } from 'styles/Main-styled';
import ContentCard from 'components/main/ContentCard';

const NoticeBox = ({ text, data, clickHandler }) => {
  return (
    <NoticeBoxWrapper>
      <TitleBox>
        {text}
        <PlustBtn
          onClick={() => {
            clickHandler();
          }}
        >
          ┼
        </PlustBtn>
      </TitleBox>
      {data.map((el) => {
        return <ContentCard content={el} />;
      })}
    </NoticeBoxWrapper>
  );
};

export default NoticeBox;
