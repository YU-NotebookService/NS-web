import React from 'react';
import img_Logo_YU_Footer from '../assets/layout/img_Logo_YU_Footer.svg';
import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  ContentContainer,
  Content,
  Address,
  TelItem,
} from '../styles/layouts/FooterLayout-styled';

const FooterLayout = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLogo src={img_Logo_YU_Footer} />
          <Content>
            <Address>
              우)38541, 경상북도 경산시 대학로 280 영남대학교 IT관(E21) 1층
              122호
            </Address>
            <ContentContainer>
              <TelItem>
                <b>행정 및 대표전화</b>&nbsp;<span>053)810-3297</span>
              </TelItem>
              <TelItem>
                <b>컴퓨터공학전공</b>&nbsp;<span>053)810-3297</span>
              </TelItem>
            </ContentContainer>
            <ContentContainer>
              <TelItem>
                <b>정보통신공학전공</b>&nbsp;<span>053-810-3295</span>
              </TelItem>
              <TelItem>
                <b>소프트웨어융합전공</b>&nbsp;<span>053)810-3297</span>
              </TelItem>
            </ContentContainer>
          </Content>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterLayout;
