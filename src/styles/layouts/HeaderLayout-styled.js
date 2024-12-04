import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
`;
export const HeaderLogo = styled.img`
  margin-top: 20px;
  margin-left: 30px;
`;
export const Title = styled.div`
  color: var(--main--color);
  font-size: 20pt;
  font-weight: 700;
  margin-top: 50px;
  cursor: pointer;
`;
export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 50px;
`;
export const PageItem = styled.div`
  color: var(--main--color);
  font-size: 20pt;
  font-size: 15pt;
  margin: 0px 10px;
  cursor: pointer;
`;
export const DivideLine = styled.div`
  hr {
    width: 98%;
    border-top: 10px #b3aeae;
  }
`;
export const NavBar = styled.div`
  display: flex;
  padding-bottom: 20px;
  justify-content: space-between;
`;
export const NavItem = styled.div`
  color: black;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    text-decoration: underline;
    transition: color 0.3s ease; /* 색상 전환 애니메이션 */
  }
`;

export const NavBtn = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
  color: gray;
`;

export const LogoutBtn = styled.div`
  font-size: 15px;
  margin: 15px 30px 0px 30px;
  font-weight: 700;
  color: gray;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
    text-decoration: underline;
    transition: color 0.3s ease; /* 색상 전환 애니메이션 */
  }
`;
