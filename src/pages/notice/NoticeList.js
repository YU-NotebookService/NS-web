import { Wrapper, Content } from '../../styles/common/List-styled';
import Banner from 'components/common/Banner';
import Title from 'components/common/Title';
import NoticeListLayout from 'components/notice/NoticeListLayout';

function NoticeList() {
  return (
    <Wrapper>
      <Banner data={''} text="공지사항" />
      <Content className="Content">
        <Title locationText={['공지사항']} titleText={'공지사항'} />
        <NoticeListLayout />
      </Content>
    </Wrapper>
  );
}

export default NoticeList;
