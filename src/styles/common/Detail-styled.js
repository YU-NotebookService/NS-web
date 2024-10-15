import Button from 'components/common/Button';
import styled from 'styled-components';

export const DetailWrapper = styled.div`
  padding-bottom: 50px;
`;

export const HeadLine = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #e1e1e1;
  background: #f1f4f7;
  padding: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 115% */
  letter-spacing: 2px;
  text-align: center;
  display: flex;
`;

export const DetailContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #e1e1e1;
  white-space: pre-wrap;
`;

export const DetailInfo = styled.div`
  color: var(--gray-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 23px; /* 153.333% */
  letter-spacing: 1.5px;
  padding: 20px;
  border-bottom: 1px solid #e1e1e1;
`;

export const ContentText = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DetailImgWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const DetailImg = styled.img`
  max-width: 30%; // 최대 너비 100%
  max-height: 300px; // 최대 높이 설정 (원하는 크기로 조정 가능)
  width: auto; // 너비는 자동 조정
  height: auto; // 높이는 자동 조정
  object-fit: contain; // 비율을 유지하며 이미지 크기 조정
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #767676;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: var(--18, 26px); /* 144.444% */
  letter-spacing: -0.45px;
`;

export const PostBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ListBtn = styled(Button)`
  width: 150px;
`;
