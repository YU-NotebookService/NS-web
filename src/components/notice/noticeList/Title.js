import React from 'react';
import {
  ListTitle,
  TitleWrapper,
} from '../../../styles/notebook/NotebookList-styled';
import Location from '../../common/Location';

const NoticeListTitle = () => {
  return (
    <TitleWrapper>
      <Location locations={['공지사항']} />
    </TitleWrapper>
  );
};

export default NoticeListTitle;
