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
  manufactureDate,
  os,
  size,
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
        {writer}
        {/* manufactureDate가 있을 때만 출력 */}
        {manufactureDate && (
          <>&nbsp;&nbsp;|&nbsp;&nbsp;제조년월 {manufactureDate}</>
        )}
        {/* os가 있을 때만 출력 */}
        {os && <>&nbsp;&nbsp;|&nbsp;&nbsp;운영체제 {os}</>}
        {/* size가 있을 때만 출력 */}
        {size && <>&nbsp;&nbsp;|&nbsp;&nbsp;사이즈 {size} inch</>}
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
