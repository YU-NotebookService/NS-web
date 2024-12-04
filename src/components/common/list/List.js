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
import {
  ListText,
  ListBtn,
  ListBtnWrapper,
} from 'styles/question/QuestionList-styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';
import { useState } from 'react';

const List = ({
  itemText,
  columns,
  currentData,
  buttonText,
  currentPage,
  setCurrentPage,
  totalPages,
  totalElements,
  isFiltered,
  toggleFilter,
  setOnlyAvailable,
  onlyAvailable,
}) => {
  const { user } = useAuth;
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false); // 드롭다운 표시 상태

  const goToRegister = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace('/list', '/reg');

    navigate(newPath);
  };

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible); // 드롭다운 열고 닫기
  };

  const handleOptionSelect = (value) => {
    setOnlyAvailable(value === 'true'); // 선택한 값으로 상태 업데이트
    setDropdownVisible(false); // 드롭다운 닫기
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'all') {
      toggleFilter(null);
    } else if (filterValue === 'false') {
      toggleFilter(false);
    } else if (filterValue === 'true') {
      toggleFilter(true);
    }
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
        {window.location.pathname.includes('question') && (
          <ListBtnWrapper>
            <ListText>문의글 필터:</ListText>
            <ListBtn
              onChange={handleFilterChange}
              value={isFiltered === null ? 'all' : isFiltered.toString()}
            >
              <option value="all">전체</option>
              <option value="false">답변 없음</option>
              <option value="true">답변 완료</option>
            </ListBtn>
          </ListBtnWrapper>
        )}
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
                  onClick={handleDropdownClick}
                >
                  {column.label} ▼
                </span>
                {dropdownVisible && (
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
                    <DropDownContent onClick={() => handleOptionSelect('true')}>
                      대여가능
                    </DropDownContent>
                    <DropDownContent
                      onClick={() => handleOptionSelect('false')}
                    >
                      대여불가
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
      {currentData.map((el, index) => {
        return (
          <InfoCard
            key={index}
            el={el}
            index={totalElements - 10 * currentPage - index}
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
              isCurrentPage={currentPage === index}
              onClick={() => {
                setCurrentPage(index);
              }}
            >
              {index + 1}
            </PagingBtn>
          ))}
        </div>

        <WriteBtn onClick={goToRegister}>{buttonText}</WriteBtn>

        {/* TODO: 공지사항 글쓰기 기능 구현 */}
      </Bottom>
    </ListWrapper>
  );
};

export default List;
