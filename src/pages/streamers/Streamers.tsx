import Divider from '../../components/ui/components/Divider';
import { AddStreamerForm } from '../../features/streamers/streamerForm/components/AddStreamerForm';
import { StreamerList } from '../../features/streamers/streamersList/components/StreamerList';

export const Streamers = () => {
  return (
    <>
      <AddStreamerForm />
      <Divider />
      <StreamerList />
    </>
  );
};
