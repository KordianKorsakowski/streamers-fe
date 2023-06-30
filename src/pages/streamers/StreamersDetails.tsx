import { useEffect, useState } from 'react';
import { getStreamer } from '../../api/streamers/getStreamer';
import { useParams } from 'react-router-dom';
import { useStreamers } from '../../containers/StreamersContainer';
import { Loader } from '../../components/ui/components/Loader';
import { StreamerDetails } from '../../features/streamers/streamerDetails/components/StreamerDetails';
import { useSnackbar } from '../../containers/SnackbarContainer';
import { InfoText } from '../../components/ui/components/InfoText';
export const StreamersDetails = () => {
  const { id } = useParams();
  const { setStreamerData, streamerData } = useStreamers();
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>();
  const { setSnackbar } = useSnackbar();
  useEffect(() => {
    setIsLoader(true);
    getStreamer(Number(id))
      .then((res) => {
        setStreamerData(() => res);
      })
      .catch((e) => {
        setShowMessage(true);
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
  return (
    <>
      {showMessage && <InfoText text="Back to home page, streamer not found" />}
      {isLoader && <Loader size="5rem" />}
      {!isLoader && streamerData && <StreamerDetails data={streamerData} />}
    </>
  );
};
