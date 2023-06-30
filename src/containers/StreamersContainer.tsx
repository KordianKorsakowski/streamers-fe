import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { StreamerItemInterface } from '../features/streamers/streamersList/types/types';

const StreamersContainer = () => {
  const [streamersList, setStreamersList] = useState<StreamerItemInterface[]>(
    []
  );
  const [streamerData, setStreamerData] = useState<StreamerItemInterface>();
  const [reloadList, setReloadList] = useState<boolean>(false);
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const [isEmptyStreamerList, setIsEmptyStreamerList] =
    useState<boolean>(false);

  useEffect(() => {
    if (streamersList.length) {
      setIsEmptyStreamerList(false);
    } else {
      setIsEmptyStreamerList(true);
    }
  }, [streamersList]);
  return {
    streamersList,
    setStreamersList,
    setReloadList,
    reloadList,
    setStreamerData,
    streamerData,
    setIsOpenForm,
    isOpenForm,
    isEmptyStreamerList,
  };
};

const useStreamersContainer = createContainer(StreamersContainer);
export const useStreamers = useStreamersContainer.useContainer;
export const StreamersProvider = useStreamersContainer.Provider;
