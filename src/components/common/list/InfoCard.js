import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper } from 'styles/common/List-styled';
import { StateText } from 'styles/question/QuestionList-styled';
import Button from '../Button';
import { useAuth } from 'api/context/AuthProvider';
import postRentalRequest from 'api/admin/postRentalRequest';

const InfoCard = ({ el, index, columns }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const goToDetailInfo = () => {
    if (window.location.pathname.includes('notebook'))
      navigate(`/notebook/info/${el.notebookId}`);
    else if (window.location.pathname.includes('question'))
      navigate(`/question/info/${el.questionId}`);
    else if (window.location.pathname.includes('notice'))
      navigate(`/notice/info/${el.noticeId}`);
    else if (window.location.pathname.includes('adminpage')) return;
  };

  const reservationId = el.reservationId;

  return (
    <CardWrapper>
      <div
        style={{
          width: columns[0].width,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {index}
      </div>
      {columns.map((column, colIndex) =>
        colIndex === 0 ? null : (
          <div
            key={colIndex}
            style={{
              width: column.width,
              justifyContent: colIndex === 1 ? 'start' : 'center',
              cursor: colIndex === 1 ? 'pointer' : null,
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={colIndex === 1 ? goToDetailInfo : null}
          >
            {column.key === 'state' ? (
              <StateText>
                {el[column.key] ? '답변 완료' : '답변 없음'}
              </StateText>
            ) : column.key === 'button' ? (
              <Button
                style={{ height: '30px', width: '50%', margin: 'auto' }}
                onClick={() => postRentalRequest({ reservationId, user })}
              >
                승인
              </Button>
            ) : column.key === 'user' ? (
              el[column.key] || '작성자 없음'
            ) : typeof el[column.key] === 'boolean' ? (
              el[column.key] ? (
                'True'
              ) : (
                'False'
              )
            ) : el[column.key] === 'AVAILABLE' ? (
              '대여가능'
            ) : el[column.key] === 'RENTAL' ? (
              '예약중'
            ) : el[column.key] === 'RESERVATION' ? (
              '대여중'
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
