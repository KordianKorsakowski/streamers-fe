import styled from 'styled-components';
import { colors, iconColors } from '../../../../theme/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const List = styled.ul`
  list-style: none;
  min-height: 65vh;
`;

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 80%;
  border-radius: 5px;
  border: 1px solid ${colors.secondColorBg};
  margin: 1rem;
  overflow: hidden;
  margin: 0 auto 1rem auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${colors.secondColorFont};
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 14%,
      rgba(143, 229, 246, 1) 74%,
      rgba(29, 53, 87, 1) 97%
    );
  }
`;
export const Cell = styled.div<{ size: string }>`
  width: ${(props) => props.size};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;
export const VotesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ThumbsUpIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${iconColors.firstUpIcon};
  transition: all 0.3s;
  &:hover {
    color: ${iconColors.secondUpIcon};
    transform: scale(1.2);
  }
`;
export const ThumbsDownIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${iconColors.firstDownIcon};
  transition: all 0.3s;
  &:hover {
    color: ${iconColors.secondDownIcon};
    transform: scale(1.2);
  }
`;
