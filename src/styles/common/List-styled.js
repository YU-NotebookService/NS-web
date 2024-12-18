import styled from 'styled-components';
import Button from 'components/common/Button';

export const Wrapper = styled.div`
  padding-bottom: 50px;
`;

export const ListBanner = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  height: 120px;
  text-align: center;
  align-content: center;
  color: white;
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
`;

export const Content = styled.div``;

export const TitleWrapper = styled.div`
  margin-bottom: 25px;
`;

export const ListTitle = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 3px;
`;

export const ListWrapper = styled.div``;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ListCount = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 2px;
  align-content: end;
`;

export const HeadLine = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #e1e1e1;
  background: #f1f4f7;
  padding: 20px 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 115% */
  letter-spacing: 2px;
  text-align: center;
  display: flex;
`;

export const CardWrapper = styled.div`
  border-bottom: 1px solid #e1e1e1;
  color: var(--gray-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 2px;
  display: flex;
  padding: 25px 0px;
  text-align: center;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 15px;
`;

export const PagingBtn = styled(Button).attrs((props) => ({
  isCurrentPage: undefined,
}))`
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  margin-right: 8px;
  background-color: ${(props) => (props.isCurrentPage ? 'white' : '')};
  color: ${(props) => (props.isCurrentPage ? 'var(--main-color)' : '')};
`;

export const WriteBtn = styled(Button)`
  padding: 14px 40px;
`;

export const DropDownContent = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SidebarContainer = styled.div``;
export const TitleContainer = styled.div``;
