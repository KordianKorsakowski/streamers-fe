import { List } from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';
import { StreamerItem } from './StreamerItem';

const FAKE_DATA: StreamerItemInterface[] = [
  { id: 1, name: 'tes1', description: 'desc1', platfromType: 'Twitch' },
  { id: 2, name: 'tes2', description: 'desc2', platfromType: 'YouTube' },
  { id: 3, name: 'tes3', description: 'desc3', platfromType: 'TikTok' },
  { id: 4, name: 'tes4', description: 'desc4', platfromType: 'Kick' },
  { id: 5, name: 'tes5', description: 'desc5', platfromType: 'Rumble' },
  { id: 6, name: 'tesssss6', description: 'desc6', platfromType: 'Twitch' },
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
          key={index}
        />
      ))}
    </List>
  );
};
