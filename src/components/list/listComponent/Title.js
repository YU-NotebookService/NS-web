import {
  ListTitle,
  TitleWrapper,
} from '../../../styles/list/List-styled'
import Location from '../../common/Location';

const Title = ({locationText, titleText}) => {
  return (
    <TitleWrapper>
      <Location locations={[locationText]} />
      <ListTitle>{titleText}</ListTitle>
    </TitleWrapper>
  );
};

export default Title;
