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

const Detail = ({ data, goToList, deletePost }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToModify = () => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace('/info', '/modify');

    navigate(newPath, { state: data });
  };
  return (
    <DetailWrapper>
      <HeadLine>{data.model}</HeadLine>
      <DetailInfo>
        {data.writer || '관리자'}
        {/* manufactureDate가 있을 때만 출력 */}
        {data.manufactureDate && (
          <>&nbsp;&nbsp;|&nbsp;&nbsp;제조년월 {data.manufactureDate}</>
        )}
        {/* os가 있을 때만 출력 */}
        {data.os && <>&nbsp;&nbsp;|&nbsp;&nbsp;운영체제 {data.os}</>}
        {/* size가 있을 때만 출력 */}
        {data.size && <>&nbsp;&nbsp;|&nbsp;&nbsp;사이즈 {data.size} inch</>}
      </DetailInfo>
      <DetailContent>
        {data.content && <ContentText>{data.content}</ContentText>}
        <DetailImgWrapper>
          {data.imgUrl &&
            data.imgUrl.map((el, index) => (
              <DetailImg src={el} alt={`img ${index}`} key={index} />
            ))}
        </DetailImgWrapper>
        <BtnWrapper>
          <ListBtn onClick={goToList}>목록</ListBtn>
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
        </BtnWrapper>
      </DetailContent>
    </DetailWrapper>
  );
};

export default Detail;
