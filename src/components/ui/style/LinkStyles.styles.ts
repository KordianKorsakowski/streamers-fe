import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  color: ${colors.firstColorFont};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${colors.secondColorFont};
  }
`;
