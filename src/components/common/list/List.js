import {
  Bottom,
  DropDownContent,
  HeadLine,
  ListCount,
  ListWrapper,
  PagingBtn,
  Top,
  WriteBtn,
} from 'styles/common/List-styled';
import SearchBox from 'components/common/SearchBox';
import InfoCard from 'components/common/list/InfoCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const List = ({
  itemText,
  columns,
  currentData = [],
  buttonText,
  currentPage,
  setCurrentPage,
  totalPages,
  totalElements,
  isFiltered,
  toggleFilter,
  setOnlyAvailable,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 표시 상태

  const goToRegister = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace('/list', '/reg');

    navigate(newPath);
  };

  const handleDropdownClick = (key) => {
    // 특정 드롭다운만 열고 닫기
    setDropdownVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleOptionSelect = (key, value) => {
    if (key === 'rentalStatus') {
      setOnlyAvailable(value === 'true'); // rentalStatus 필터 업데이트
    } else if (key === 'state') {
      toggleFilter(value === 'true' ? true : value === 'false' ? false : null); // state 필터 업데이트
    }

    // 드롭다운 닫기
    setDropdownVisible((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return (
    <ListWrapper>
      <Top>
        <ListCount>
          총&nbsp;
          <span style={{ color: 'var(--main-color)' }}>{totalElements}</span>
          {itemText}
        </ListCount>
        <SearchBox />
      </Top>
      <HeadLine>
        {columns.map((column, index) => {
          if (column.key === 'rentalStatus') {
            return (
              <div
                key={index}
                style={{ width: column.width, position: 'relative' }}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDropdownClick('rentalStatus')}
                >
                  {column.label} ▼
                </span>
                {dropdownVisible.rentalStatus && (
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      marginTop: '5px',
                      zIndex: 100,
                      width: '100%',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <DropDownContent
                      onClick={() => handleOptionSelect('rentalStatus', 'true')}
                    >
                      대여가능
                    </DropDownContent>
                    <DropDownContent
                      onClick={() => handleOptionSelect('rentalStatus', 'false')}
                    >
                      대여불가
                    </DropDownContent>
                  </div>
                )}
              </div>
            );
          }

          if (column.key === 'state') {
            return (
              <div
                key={index}
                style={{ width: column.width, position: 'relative' }}
              >
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDropdownClick('state')}
                >
                  {column.label} ▼
                </span>
                {dropdownVisible.state && (
                  <div
                    style={{
                      position: 'absolute',
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      marginTop: '5px',
                      zIndex: 100,
                      width: '100%',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <DropDownContent
                      onClick={() => handleOptionSelect('state', 'true')}
                    >
                      답변 완료
                    </DropDownContent>
                    <DropDownContent
                      onClick={() => handleOptionSelect('state', 'false')}
                    >
                      답변 없음
                    </DropDownContent>
                    <DropDownContent
                      onClick={() => handleOptionSelect('state', 'all')}
                    >
                      전체
                    </DropDownContent>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={index} style={{ width: column.width }}>
              {column.label}
            </div>
          );
        })}
      </HeadLine>
      {currentData &&
        currentData.map((el, index) => {
          return currentPage !== null ? (
            <InfoCard
              key={index}
              el={el}
              index={totalElements - 10 * currentPage - index}
              columns={columns}
            />
          ) : (
            <InfoCard key={index} el={el} index={index + 1} columns={columns} />
          );
        })}
      <Bottom>
        <div
          style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <PagingBtn
              key={index}
              isCurrentPage={currentPage === index}
              onClick={() => {
                setCurrentPage(index);
              }}
            >
              {index + 1}
            </PagingBtn>
          ))}
        </div>
        {!window.location.pathname.includes('admin') && (
          <WriteBtn onClick={goToRegister}>{buttonText}</WriteBtn>
        )}
      </Bottom>
    </ListWrapper>
  );
};

export default List;