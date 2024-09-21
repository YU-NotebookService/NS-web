import React, { useState } from 'react';
import {
  Bottom,
  HeadLine,
  ListCount,
  ListWrapper,
  Top,
} from '../../../styles/notice/NoticeList-styled';
import SearchBox from '../../common/SearchBox';
import InfoCard from './InfoCard';
import Button from '../../common/Button';

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(noticeData.length / itemsPerPage);

  const currentData = noticeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ListWrapper>
      <Top>
        <ListCount>
          총&nbsp;
          <span style={{ color: 'var(--main-color)' }}>
            {noticeData.length}
          </span>
          개의 게시물이 등록되어 있습니다.
        </ListCount>
        <SearchBox />
      </Top>
      <HeadLine>
        <div style={{ width: '10%' }}>번호</div>
        <div style={{ width: '65%' }}>제목</div>
        <div style={{ width: '15%' }}>작성자</div>
        <div style={{ width: '10%' }}>작성일</div>
      </HeadLine>
      {currentData.map((el, index) => {
        const displayIndex = (currentPage - 1) * itemsPerPage + index + 1;
        return <InfoCard el={el} index={displayIndex} key={index} />;
      })}
      <Bottom>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              style={{
                padding: '8px 16px',
                marginRight: '8px',
                backgroundColor:
                  currentPage === index + 1 ? 'var(--main-color)' : '',
              }}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
        <Button style={{ padding: '14px 40px' }}>글쓰기</Button>
      </Bottom>
    </ListWrapper>
  );
};

const noticeData = Array(28).fill({
  title: '★☆ 컴퓨터학부 노트북 대여 시 주의사항 ☆★',
  writer: '관리자',
  dateOfPreparation: '24-09-04',
});

export default List;
