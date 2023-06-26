import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { StreamerItemInterface } from '../features/streamers/streamersList/types/types';

const StreamersContainer = () => {
  const [streamersList, setStreamersList] = useState<StreamerItemInterface[]>(
    []
  );
  const [streamerData, setStreamerData] = useState<StreamerItemInterface>();
  const [reloadList, setReloadList] = useState<boolean>(false);
  return {
    streamersList,
    setStreamersList,
    setReloadList,
    reloadList,
    setStreamerData,
    streamerData,
  };
};

const useStreamersContainer = createContainer(StreamersContainer);
export const useStreamers = useStreamersContainer.useContainer;
export const StreamersProvider = useStreamersContainer.Provider;
