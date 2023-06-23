import { Container, Item } from '../style/FooterStyles.styles';
import { getCurrentYear } from '../utils/getCurrentYear';

export const Footer = () => {
  return (
    <Container>
      <Item>&copy;{getCurrentYear()} &#8212; Kordian Korsakowski</Item>
    </Container>
  );
};
