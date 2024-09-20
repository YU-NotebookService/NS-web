import React from 'react';
import {
  Bottom,
  HeadLine,
  ListCount,
  ListWrapper,
  Top,
} from '../../../styles/notebook/NotebookList-styled';
import SearchBox from '../../common/SearchBox';
import InfoCard from './InfoCard';
import Button from '../../common/Button';

const List = () => {
  return (
    <ListWrapper>
      <Top>
        <ListCount>
          총&nbsp;
          <span style={{ color: 'var(--main-color)' }}>
            {nobtebookData.length}
          </span>
          개의 노트북이 등록되어 있습니다.
        </ListCount>
        <SearchBox />
      </Top>
      <HeadLine>
        <div style={{ width: '5%' }}>번호</div>
        <div style={{ width: '60%' }}>모델명</div>
        <div style={{ width: '25%' }}>운영체제</div>
        <div style={{ width: '10%' }}>대여상태</div>
      </HeadLine>
      {nobtebookData.map((el, index) => {
        return <InfoCard el={el} index={index} />;
      })}
      <Bottom>
        <Button style={{ padding: '14px 40px' }}>신규 등록</Button>
      </Bottom>
    </ListWrapper>
  );
};

const nobtebookData = [
  {
    model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
    os: 'Windows 11',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
  {
    model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
    os: 'Windows 11',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
  {
    model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
    os: 'Windows 11',
    rentalStatus: '대여가능',
  },
  {
    model: 'LG 13세대 울트라북 LG ULTRA 15U50R (32G/512G)',
    os: 'Windows 11',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
  {
    model: '애플 맥북프로 14 M1 512GB 스페이스 그레이',
    os: 'Mac OS',
    rentalStatus: '대여가능',
  },
];

export default List;
