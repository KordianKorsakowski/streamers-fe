import styled from 'styled-components';
import { colors } from '../../../../theme/colors';
import { device } from '../../../../theme/breakpoints';

export const ContainerForm = styled.div`
  background-color: #fff;
  width: 95%;
  margin: auto;
  padding: 0.5rem;
  border-radius: 5px;
`;

export const CollapseStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: ${colors.secondColorFont};
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${colors.firstColorBg};
    color: ${colors.firstColorFont};
  }
`;
