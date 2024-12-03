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
import { ListBtn } from 'styles/question/QuestionList-styled';
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
          <>
            <ListBtn onClick={toggleFilter} style={{ marginLeft: '10px' }}>
              {isFiltered ? '전체 보기' : '답변이 완료된 게시글'}
            </ListBtn>
          </>
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
