import { useEffect, useState } from 'react';
import { getStreamersList } from '../../api/streamers/getStreamersList';
import Divider from '../../components/ui/components/Divider';
import { AddStreamerForm } from '../../features/streamers/streamerForm/components/AddStreamerForm';
import { StreamerList } from '../../features/streamers/streamersList/components/StreamerList';
import { useStreamers } from '../../containers/StreamersContainer';
import { Loader } from '../../components/ui/components/Loader';

export const Streamers = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const { setStreamersList, streamersList } = useStreamers();
  useEffect(() => {
    getStreamersList().then((res) => {
      console.log(res);
      setStreamersList(() => res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AddStreamerForm />
      <Divider />
      {isLoader && <Loader size="5rem" />}
      {!isLoader && <StreamerList data={streamersList} />}
    </>
  );
};
