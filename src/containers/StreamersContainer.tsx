import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { StreamerItemInterface } from '../features/streamers/streamersList/types/types';

const StreamersContainer = () => {
  const [streamersList, setStreamersList] = useState<StreamerItemInterface[]>(
    []
  );
  return {
    streamersList,
    setStreamersList,
  };
};

const useStreamersContainer = createContainer(StreamersContainer);
export const useStreamers = useStreamersContainer.useContainer;
export const StreamersProvider = useStreamersContainer.Provider;
