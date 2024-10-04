import React from 'react';
import {
  MainBanner,
  BannerContent,
  BannerText,
  ButtonWrapper,
  RentalBtn,
} from 'styles/Main-styled';

const Banner = () => {
  return (
    <MainBanner>
      <BannerContent>
        <BannerText>
          컴퓨터학부(과) 재학생을 대상으로 교과목 수업 및 실습을 원활히 하고
          <br />
          학업에 필요한 도구와 확장된 학습 기회 제공을 위해 노트북 대여를
          시행합니다.
        </BannerText>
        <ButtonWrapper>
          <RentalBtn>노트북 대여하기</RentalBtn>
        </ButtonWrapper>
      </BannerContent>
    </MainBanner>
  );
};

export default Banner;
