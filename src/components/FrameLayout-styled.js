import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
`;
export const HeaderLogo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;
export const Title = styled.div`
  color: #032867;
  font-size: 20pt;
  font-weight: 700;
  margin-top: 50px;
`;
export const PageWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 50px;
`;
export const PageItem = styled.div`
  color: #032867;
  font-size: 15pt;
  margin-right: 20px;
`;
export const DivideLine = styled.div`
  hr {
    width: 98%;
    border-top: 10px #b3aeae;
  }
`;
export const NavBar = styled.div`
  display: flex;
`;
export const NavItem = styled.div`
  color: black;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
`;

export const FooterWrapper = styled.div`
  /* display: flex; */
  /* margin-top: auto;
  position: relative; */
  /* bottom: 0; */
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background: #333945;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto; /* 페이지 하단에 위치하도록 조정 */
  padding: 20px 0;
`;
export const FooterLogo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;
export const Content = styled.div`
  font-size: 10px;
  color: #c9c9c9;
  margin: auto;
`;
export const Address = styled.div`
  span {
    font-weight: 600;
  }
`;
export const TelItem = styled.div`
  display: flex;
`;
