import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 80%;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 90%;
  justify-content: space-between;
`;
export const Cell = styled.div`
  width: 20rem;
`;
