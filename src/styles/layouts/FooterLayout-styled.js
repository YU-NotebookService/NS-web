import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background: #333945;
`;

export const FooterWrapper = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 10px;
`;

export const FooterLogo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;
export const Content = styled.div`
  font-size: 10px;
  line-height: 200%;
  color: #c9c9c9;
  margin-left: 40px;
  margin-top: 30px;
`;
export const ContentContainer = styled.div`
  display: inline-block;
  margin-right: 15px;
  margin-top: 20px;
`;
export const Address = styled.div`
  font-size: 15px;
  font-weight: 100;
`;
export const TelItem = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;

  span {
    text-decoration: underline;
    font-weight: 100;
  }
`;
