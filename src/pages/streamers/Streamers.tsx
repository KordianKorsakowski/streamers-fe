import { useEffect, useState } from 'react';
import { getStreamersList } from '../../api/streamers/getStreamersList';
import { AddStreamerForm } from '../../features/streamers/streamerForm/components/AddStreamerForm';
import { StreamerList } from '../../features/streamers/streamersList/components/StreamerList';
import { useStreamers } from '../../containers/StreamersContainer';
import { Loader } from '../../components/ui/components/Loader';
import { useSnackbar } from '../../containers/SnackbarContainer';
import { InfoText } from '../../components/ui/components/InfoText';

export const Streamers = () => {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const { setStreamersList, streamersList, setReloadList, reloadList } =
    useStreamers();
  const { setSnackbar } = useSnackbar();
  useEffect(() => {
    setIsLoader(true);
    getStreamersList()
      .then((res) => {
        setStreamersList(() => res);
      })
      .catch((e) => {
        setSnackbar({
          text: e.response.data.message,
          type: 'error',
        });
      })
      .finally(() => {
        setIsLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (reloadList) {
      getStreamersList()
        .then((res) => {
          setStreamersList(() => res);
        })
        .finally(() => {
          setReloadList(() => false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadList]);

  return (
    <>
      {!streamersList.length && <InfoText text="Please add new streamer." />}
      <AddStreamerForm />
      {isLoader && <Loader size="5rem" />}
      {!isLoader && <StreamerList data={streamersList} />}
    </>
  );
};
