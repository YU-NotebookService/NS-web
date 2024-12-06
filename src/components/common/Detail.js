import React from 'react';
import {
  BtnWrapper,
  ContentText,
  DetailContent,
  DetailImg,
  DetailImgWrapper,
  DetailInfo,
  DetailWrapper,
  HeadLine,
  ListBtn,
  PostBtn,
  PostBtnWrapper,
} from 'styles/common/Detail-styled';
import { ReactComponent as ModifyIcon } from 'assets/common/modifyIcon.svg';
import { ReactComponent as DeleteIcon } from 'assets/common/deleteIcon.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'api/context/AuthProvider';

const Detail = ({ data, goToList, deletePost }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const goToModify = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace('/info', '/modify');

    navigate(newPath, { state: data });
  };
  return (
    <DetailWrapper>
      <HeadLine>{data.title || data.model || '제목 없음'}</HeadLine>
      <DetailInfo>
        {(data.writer || '관리자') && <>작성자 {data.writer || '관리자'}</>}
        {data.manufactureDate && (
          <>&nbsp;&nbsp;|&nbsp;&nbsp;제조년월 {data.manufactureDate}</>
        )}
        {data.os && <>&nbsp;&nbsp;|&nbsp;&nbsp;운영체제 {data.os}</>}
        {data.size && <>&nbsp;&nbsp;|&nbsp;&nbsp;사이즈 {data.size} inch</>}

        {data.date && <>&nbsp;&nbsp;|&nbsp;&nbsp;작성일 {data.date}</>}
      </DetailInfo>
      <DetailContent>
        {data.contentText || data.content ? (
          <ContentText>{data.contentText || data.content}</ContentText>
        ) : (
          <p>내용이 없습니다.</p>
        )}
        <DetailImgWrapper>
          {data.imgUrl &&
            data.imgUrl.map((el, index) => (
              <DetailImg src={el} alt={`img ${index}`} key={index} />
            ))}
        </DetailImgWrapper>
        <BtnWrapper>
          <ListBtn onClick={goToList}>목록</ListBtn>
          {user.role === 'ADMIN' ? (
            <PostBtnWrapper>
              <PostBtn onClick={goToModify}>
                글 수정
                <ModifyIcon />
              </PostBtn>
              |
              <PostBtn onClick={deletePost}>
                글 삭제
                <DeleteIcon />
              </PostBtn>
            </PostBtnWrapper>
          ) : window.location.pathname.includes('question') ? (
            <PostBtnWrapper>
              <PostBtn onClick={goToModify}>
                글 수정
                <ModifyIcon />
              </PostBtn>
              |
              <PostBtn onClick={deletePost}>
                글 삭제
                <DeleteIcon />
              </PostBtn>
            </PostBtnWrapper>
          ) : null}
        </BtnWrapper>
      </DetailContent>
    </DetailWrapper>
  );
};

export default Detail;
