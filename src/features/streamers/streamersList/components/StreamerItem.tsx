import { voteAction } from '../../../../api/streamers/voteAction';
import { Link } from '../../../../components/ui/components/Link';
import { useSnackbar } from '../../../../containers/SnackbarContainer';
import { useStreamers } from '../../../../containers/StreamersContainer';
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
import { StreamerItemInterface, VoteType } from '../types/types';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export const StreamerItem: React.FC<StreamerItemInterface> = ({
  id,
  description,
  name,
  platfromType,
  downvote,
  upvote,
}) => {
  const { setSnackbar } = useSnackbar();
  const { setReloadList } = useStreamers();
  const voteHandler = (votetype: VoteType) => {
    voteAction(id, votetype)
      .then(() => {
        setSnackbar({ text: 'Your votes count!', type: 'success' });
        setReloadList(() => true);
      })
      .catch((e) => {
        console.log(e);
        setSnackbar({ text: 'Upss....', type: 'error' });
      });
  };
  return (
    <ItemList>
      <Link href={`/streamer/${id}`}>
        <ContentContainer>
          <Cell size={cellSize.medium}>{name}</Cell>
          <Cell size={cellSize.large}>{description}</Cell>
          <Cell size={cellSize.small}>{platfromType}</Cell>
        </ContentContainer>
      </Link>
      <ActionsContainer>
        <VotesContainer>
          <p>{upvote}</p>
          <ThumbsUpIcon
            icon={faThumbsUp}
            onClick={() => voteHandler('upvote')}
          />
        </VotesContainer>
        <VotesContainer>
          <p>{downvote}</p>
          <ThumbsDownIcon
            icon={faThumbsDown}
            onClick={() => voteHandler('downvote')}
          />
        </VotesContainer>
      </ActionsContainer>
    </ItemList>
  );
};
