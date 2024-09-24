import { Wrapper, Content } from '../../styles/common/List-styled';
import Banner from '../../components/common/Banner';
import Title from '../../components/common/Title';
import NotebookListLayout from 'components/notebook/NotebookListLayout';

function NoticeList() {
  return (
    <Wrapper>
      <Banner data={notebookBanner} text = "노트북 대여"/>
      <Content className="Content">
        <Title
          locationText={"노트북 대여"}
          titleText={"노트북 대여"}
        />
        <NotebookListLayout />
      </Content>
    </Wrapper>
  );
}

export default NoticeList;