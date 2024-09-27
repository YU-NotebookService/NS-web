import React from 'react';
import { MainBoxWrapper } from 'styles/Main-styled';
import NoticeBox from './NoticeBox';

const MainBoxs = () => {
  return (
    <MainBoxWrapper>
      <NoticeBox text={'공지사항'} data={noticeData} />
      <NoticeBox text={'1:1 문의'} data={questionData} />
    </MainBoxWrapper>
  );
};

const noticeData = [
  {
    year: 24,
    date: '09-01',
    title: '첫 번째 공지사항',
    description: '첫 번째 공지사항의 내용입니다',
  },
  {
    year: 24,
    date: '09-08',
    title: '두 번째 공지사항',
    description: '두 번째 공지사항의 내용입니다',
  },
  {
    year: 24,
    date: '09-16',
    title: '세 번째 1:1 문의',
    description: '세 번째 1:1 문의의 내용입니다',
  },
];

const questionData = [
  {
    year: 24,
    date: '09-01',
    title: '첫 번째 1:1 문의',
    description: '첫 번째 1:1 문의의 내용입니다',
  },
  {
    year: 24,
    date: '09-08',
    title: '두 번째 1:1 문의',
    description: '두 번째 1:1 문의의 내용입니다',
  },
  {
    year: 24,
    date: '09-16',
    title: '세 번째 1:1 문의',
    description: '세 번째 1:1 문의의 내용입니다',
  },
];

export default MainBoxs;
