import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CardWrapper } from 'styles/common/List-styled';
import { StateText } from 'styles/question/QuestionList-styled';


const InfoCard = ({ el, index, columns }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToNotebookInfo = () => {
    if (window.location.pathname.includes('notebook'))
      navigate(`/notebook/info/${el.notebookId}`);
    else if (window.location.pathname.includes('question'))
      navigate(`/question/info/${el.questionId}`);
  };

  return (
    <CardWrapper>
      <div style={{ width: columns[0].width, textAlign: 'center' }}>
        {index}
      </div>
      {columns.map((column, colIndex) =>
        colIndex === 0 ? null : (
          <div
            key={colIndex}
            style={{
              width: column.width,
              textAlign: colIndex === 1 ? 'start' : 'center',
              cursor: colIndex === 1 ? 'pointer' : null,
            }}
            onClick={colIndex === 1 ? goToNotebookInfo : null}
          >
            {column.key === 'state' ? (
              <StateText>
                {el[column.key] ? '답변 완료' : '답변 없음'}
              </StateText>
            ) : column.key === 'user' ? (
              el[column.key] || '작성자 없음'
            ) : el[column.key] === 'AVAILABLE' ? (
              '대여가능'
            ) : el[column.key] === 'RESERVATION' ? (
              '대여불가'
            ) : (
              el[column.key]
            )}
          </div>
        ),
      )}
    </CardWrapper>
  );
};

export default InfoCard;
