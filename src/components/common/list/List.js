import { useState } from 'react';
import {
  Bottom,
  HeadLine,
  ListCount,
  ListWrapper,
  Top,
} from 'styles/common/List-styled';
import SearchBox from '../SearchBox';
import InfoCard from './InfoCard';
import Button from '../Button';

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
          return <InfoCard key={index} el={el} index={displayIndex} columns={columns} />;
        })}
      <Bottom>
      <div
          style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '8px 16px',
                marginRight: '8px',
                backgroundColor: currentPage === index + 1 ? 'white' : '',
                color: currentPage === index + 1 ? 'var(--main-color)' : '',
              }}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          </div>
        <Button style={{ padding: '14px 40px' }}>{buttonText}</Button>
         {/* TODO: 공지사항 글쓰기 기능 구현 */}
      </Bottom>
    </ListWrapper>
  );
};

export default List; 