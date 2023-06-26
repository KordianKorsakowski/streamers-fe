import { useEffect, useState } from 'react';
import { getStreamer } from '../../api/streamers/getStreamer';
import { useParams } from 'react-router-dom';
import { useStreamers } from '../../containers/StreamersContainer';
import { Loader } from '../../components/ui/components/Loader';
export const StreamersDetails = () => {
  const { id } = useParams();
  const { setStreamerData } = useStreamers();
  const [isLoader, setIsLoader] = useState<boolean>(false);
  console.log(id);
  useEffect(() => {
    setIsLoader(true);
    getStreamer(Number(id))
      .then((res) => {
        setStreamerData(() => res);
      })
      .finally(() => {
        setIsLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoader && <Loader size="5rem" />}
      {!isLoader && <div>StreamersDetails</div>}
    </>
  );
};
