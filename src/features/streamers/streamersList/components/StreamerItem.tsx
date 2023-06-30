import { useDebouncedCallback } from 'use-debounce';
import { voteAction } from '../../../../api/streamers/voteAction';
import { Link } from '../../../../components/ui/components/Link';
import { useSnackbar } from '../../../../containers/SnackbarContainer';
import { useStreamers } from '../../../../containers/StreamersContainer';
import { cellSize } from '../../../../theme/cell';
import { iconColors } from '../../../../theme/colors';
import {
  ActionsContainer,
  Cell,
  ContentContainer,
  ItemList,
  ThumbsIcon,
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
        setSnackbar({
          text: e.response?.data.message || 'Unhandled error',
          type: 'error',
        });
      });
  };
  const debouncedVote = useDebouncedCallback((value) => {
    voteHandler(value);
  }, 500);

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
          <ThumbsIcon
            color={
              Boolean(upvote)
                ? iconColors.firstUpIcon
                : iconColors.zeroVoteIconColor
            }
            icon={faThumbsUp}
            onClick={() => debouncedVote('upvote')}
          />
        </VotesContainer>
        <VotesContainer>
          <p>{downvote}</p>
          <ThumbsIcon
            color={
              Boolean(downvote)
                ? iconColors.firstDownIcon
                : iconColors.zeroVoteIconColor
            }
            icon={faThumbsDown}
            onClick={() => debouncedVote('downvote')}
          />
        </VotesContainer>
      </ActionsContainer>
    </ItemList>
  );
};
