import { useState } from 'react';
import {
  Bottom,
  HeadLine,
  ListCount,
  ListWrapper,
  PagingBtn,
  Top,
  WriteBtn,
} from 'styles/common/List-styled';
import SearchBox from 'components/common/SearchBox';
import InfoCard from 'components/common/list/InfoCard';

const List = ({ itemText, columns, currentData, buttonText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(currentData.length / itemsPerPage);

  const currentItem = currentData.slice(
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
            {currentData.length}
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
      {currentItem.map((el, index) => {
        const displayIndex = (currentPage - 1) * itemsPerPage + index + 1;
        return (
          <InfoCard
            key={index}
            el={el}
            index={displayIndex}
            columns={columns}
          />
        );
      })}
      <Bottom>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <PagingBtn
              key={index}
              isCurrentPage={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PagingBtn>
          ))}
        </div>
        <WriteBtn>{buttonText}</WriteBtn>
        {/* TODO: 공지사항 글쓰기 기능 구현 */}
      </Bottom>
    </ListWrapper>
  );
};

export default List;
