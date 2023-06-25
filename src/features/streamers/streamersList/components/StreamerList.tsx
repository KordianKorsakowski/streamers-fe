import { List } from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';
import { StreamerItem } from './StreamerItem';

const FAKE_DATA: StreamerItemInterface[] = [
  {
    id: 1,
    name: 'tes1',
    description: 'desc1',
    platfromType: 'Twitch',
    downvotes: 1,
    upvotes: 1,
  },
  {
    id: 2,
    name: 'tes2',
    description: 'desc2',
    platfromType: 'YouTube',
    downvotes: 2,
    upvotes: 2,
  },
  {
    id: 3,
    name: 'tes3',
    description: 'desc3',
    platfromType: 'TikTok',
    downvotes: 3,
    upvotes: 3,
  },
  {
    id: 4,
    name: 'tes4',
    description: 'desc4',
    platfromType: 'Kick',
    downvotes: 4,
    upvotes: 4,
  },
  {
    id: 5,
    name: 'tes5',
    description: 'desc5',
    platfromType: 'Rumble',
    downvotes: 5,
    upvotes: 5,
  },
  {
    id: 6,
    name: 'tesssss6',
    description: 'deschhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh6',
    platfromType: 'Twitch',
    downvotes: 6,
    upvotes: 6,
  },
];

export const StreamerList = () => {
  return (
    <List>
      {FAKE_DATA.map((item: StreamerItemInterface, index: number) => (
        <StreamerItem
          id={item.id}
          platfromType={item.platfromType}
          name={item.name}
          description={item.description}
          upvotes={item.upvotes}
          downvotes={item.downvotes}
          key={index}
        />
      ))}
    </List>
  );
};
