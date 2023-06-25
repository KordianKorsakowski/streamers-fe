import { Link } from '../../../../components/ui/components/Link';
import { cellSize } from '../../../../theme/cell';
import {
  ActionsContainer,
  Cell,
  ContentContainer,
  ItemList,
  ThumbsDownIcon,
  ThumbsUpIcon,
  VotesContainer,
} from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export const StreamerItem: React.FC<StreamerItemInterface> = ({
  id,
  description,
  name,
  platfromType,
  downvotes,
  upvotes,
}) => {
  const showDetilsPageHandler = () => {};
  return (
    <ItemList>
      <Link href={`/streamer/${id}`}>
        <ContentContainer onClick={showDetilsPageHandler}>
          <Cell size={cellSize.small}>{id}</Cell>
          <Cell size={cellSize.medium}>{name}</Cell>
          <Cell size={cellSize.large}>{description}</Cell>
          <Cell size={cellSize.small}>{platfromType}</Cell>
        </ContentContainer>
      </Link>
      <ActionsContainer>
        <VotesContainer>
          <p>{upvotes}</p>
          <ThumbsUpIcon icon={faThumbsUp} />
        </VotesContainer>
        <VotesContainer>
          <p>{downvotes}</p>
          <ThumbsDownIcon icon={faThumbsDown} />
        </VotesContainer>
      </ActionsContainer>
    </ItemList>
  );
};
