import React from 'react';
import { NoticeBoxWrapper, PlustBtn, TitleBox } from 'styles/Main-styled';

const NoticeBox = ({ text, clickHandler }) => {
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
    </NoticeBoxWrapper>
  );
};

export default NoticeBox;
