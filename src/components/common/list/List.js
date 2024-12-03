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
import { ListText, ListBtn, ListBtnWrapper } from 'styles/question/QuestionList-styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';

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
}) => {
  const { user } = useAuth;
  const navigate = useNavigate();
  const location = useLocation();

  const goToRegister = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace('/list', '/reg');

    navigate(newPath);
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
            <ListBtn onChange={handleFilterChange} value={isFiltered === null ? 'all' : isFiltered.toString()}>
              <option value="all">전체</option>
              <option value="false">답변 없음</option>
              <option value="true">답변 완료</option>
            </ListBtn>
          </ListBtnWrapper>
        )}
        <SearchBox />
      </Top>
      <HeadLine>
        {columns.map((column, index) => (
          <div key={index} style={{ width: column.width }}>
            {column.label}
          </div>
        ))}
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
