import { List } from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';
import { StreamerItem } from './StreamerItem';

export const StreamerList: React.FC<{ data: StreamerItemInterface[] }> = ({
  data,
}) => {
  return (
    <List>
      {data.map((item: StreamerItemInterface, index: number) => (
        <StreamerItem
          id={item.id}
          platfromType={item.platfromType}
          name={item.name}
          description={item.description}
          upvote={item.upvote}
          downvote={item.downvote}
          key={index}
        />
      ))}
    </List>
  );
};
