import { useEffect } from 'react';
import { getStreamersList } from '../../api/streamers/getStreamersList';
import { AddStreamerForm } from '../../features/streamers/streamerForm/components/AddStreamerForm';
import { StreamerList } from '../../features/streamers/streamersList/components/StreamerList';
import { useStreamers } from '../../containers/StreamersContainer';
import { Loader } from '../../components/ui/components/Loader';
import { InfoText } from '../../components/ui/components/InfoText';
import { useQuery } from '@tanstack/react-query';
export const Streamers = () => {
  const {
    setStreamersList,
    streamersList,
    setReloadList,
    reloadList,
    isEmptyStreamerList,
  } = useStreamers();
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ['streamers'],
    queryFn: getStreamersList,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60,
  });
  if (data) {
    setStreamersList(() => data);
  }

  useEffect(() => {
    if (reloadList) {
      refetch();
      setReloadList(() => false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadList]);

  return (
    <>
      {isLoading && <Loader size="5rem" />}
      {!isLoading && (
        <>
          <AddStreamerForm />
          {isEmptyStreamerList && !isError && (
            <InfoText text="Please add a streamer to see your list" />
          )}
          {isError && (
            <InfoText text="Please contact your administrator, There was an error connecting to the database." />
          )}
          <StreamerList data={streamersList} />
        </>
      )}
    </>
  );
};
