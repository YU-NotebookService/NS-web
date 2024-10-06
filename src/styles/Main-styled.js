import styled from 'styled-components';
import mainBanner from '../assets/main/mainBanner.png';
import Button from 'components/common/Button';

export const Wrapper = styled.div`
  background-color: #f1f4fb;
`;

export const Content = styled.div``;

export const MainBanner = styled.div`
  background-image: url(${mainBanner});
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  padding-top: 130px;
  padding-bottom: 35px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const BannerText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const MainBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const NoticeBoxWrapper = styled.div`
  padding: 40px;
  background-color: white;
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  display: flex;
  gap: 10px;
`;

export const DateBox = styled.div`
  text-align: center;
  border-right: 1px solid #ccc;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Year = styled.div`
  color: var(--main-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Date = styled.div`
  color: var(--gray-color);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const NoticeTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NoticeContent = styled.div`
  color: var(--gray-color, #838583);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const RentalBtn = styled(Button)`
  border-radius: 6px;
`;

export const PlustBtn = styled(Button)`
  font-size: 30px;
  align-content: center;
  padding: 0px 9px 6px 9px;
`;
