import React from 'react';
import {
  CardWrapper,
  DateBox,
  Year,
  Date,
  ContentBox,
  NoticeTitle,
  NoticeContent,
} from '../../styles/Main-styled';

const ContentCard = ({ content }) => {
  console.log('읽어온 값', content);
  return (
    <CardWrapper>
      <DateBox>
        <Year>{content.year}</Year>
        <Date>{content.date}</Date>
      </DateBox>
      <ContentBox>
        <NoticeTitle>{content.title}</NoticeTitle>
        <NoticeContent>{content.description}</NoticeContent>
      </ContentBox>
    </CardWrapper>
  );
};

export default ContentCard;
