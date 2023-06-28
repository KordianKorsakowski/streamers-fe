import { VirtualizeContainer } from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';
import { StreamerItem } from './StreamerItem';
import { List, AutoSizer } from 'react-virtualized';

export const StreamerList: React.FC<{ data: StreamerItemInterface[] }> = ({
  data,
}) => {
  return (
    <VirtualizeContainer>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              width={width}
              height={height}
              rowCount={data.length}
              rowHeight={45}
              rowRenderer={({ key, index, style }) => {
                const streamer = data[index];
                return (
                  <div style={style} key={key}>
                    <StreamerItem
                      id={streamer.id}
                      platfromType={streamer.platfromType}
                      name={streamer.name}
                      description={streamer.description}
                      upvote={streamer.upvote}
                      downvote={streamer.downvote}
                      key={key}
                    />
                  </div>
                );
              }}
              overscanRowCount={3}
            ></List>
          );
        }}
      </AutoSizer>
    </VirtualizeContainer>
  );
};
