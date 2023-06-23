import { Link } from '../../ui/components/Link';
import { Container, Title } from '../style/HeaderStyles.styles';
export const Header = () => {
  return (
    <Container>
      <Link href={'/streamers'}>
        <Title>Streamers-app</Title>
      </Link>
    </Container>
  );
};
