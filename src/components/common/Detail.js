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

const Detail = ({
  headLineText,
  writer,
  createdAt,
  os,
  contentText,
  imgUrl,
  goToList,
  modifyPost,
  deletePost,
}) => {
  return (
    <DetailWrapper>
      <HeadLine>{headLineText}</HeadLine>

      <DetailInfo>
        {writer}&nbsp;&nbsp;|&nbsp;&nbsp;등록일 {createdAt}
        {/* os가 있을 때만 출력 */}
        {os && <>&nbsp;&nbsp;|&nbsp;&nbsp;운영체제 {os}</>}
      </DetailInfo>
      <DetailContent>
        {contentText && <ContentText>{contentText}</ContentText>}
        <DetailImgWrapper>
          {imgUrl &&
            imgUrl.map((el, index) => (
              <DetailImg src={el} alt={`img ${index}`} key={index} />
            ))}
        </DetailImgWrapper>
        <BtnWrapper>
          <ListBtn onClick={goToList}>목록</ListBtn>
          <PostBtnWrapper>
            <PostBtn onClick={modifyPost}>
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
