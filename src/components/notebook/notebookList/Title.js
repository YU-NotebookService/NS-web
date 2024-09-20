import React from 'react';
import {
  ListTitle,
  TitleWrapper,
} from '../../../styles/notebook/NotebookList-styled';
import Location from '../../common/Location';

const NotebookListTitle = () => {
  return (
    <TitleWrapper>
      <Location locations={['노트북 대여']} />
      <ListTitle>노트북 목록 조회</ListTitle>
    </TitleWrapper>
  );
};

export default NotebookListTitle;
