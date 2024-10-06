import { ListTitle, TitleWrapper } from 'styles/common/List-styled';
import Location from 'components/common/Location';

const Title = ({ locationText, titleText }) => {
  return (
    <TitleWrapper>
      <Location locations={locationText} />
      <ListTitle>{titleText}</ListTitle>
    </TitleWrapper>
  );
};

export default Title;
