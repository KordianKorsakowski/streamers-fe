import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../ui/components/Link';
import { Container, Title } from '../style/HeaderStyles.styles';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const Header = () => {
  const [isLink, setIsLink] = useState<boolean>(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== '/streamers') {
      setIsLink(true);
    } else {
      setIsLink(false);
    }
  }, [pathname]);

  return (
    <Container>
      {isLink && (
        <Link href={'/streamers'}>
          <Title>Streamers-app</Title>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      )}
      {!isLink && <Title>Streamers-app</Title>}
    </Container>
  );
};
