import { LinkStyle } from '../style/LinkStyles.styles';

type Props = {
  children: React.ReactNode;
  href: string;
};

export const Link: React.FC<Props> = ({ children, href }) => {
  return <LinkStyle to={href}>{children}</LinkStyle>;
};
