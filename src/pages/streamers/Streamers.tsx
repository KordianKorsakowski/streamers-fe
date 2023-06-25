import { getStreamersList } from '../../api/streamers/getStreamersList';
import Divider from '../../components/ui/components/Divider';
import { useSnackbar } from '../../containers/SnackbarContainer';
import { AddStreamerForm } from '../../features/streamers/streamerForm/components/AddStreamerForm';
import { StreamerList } from '../../features/streamers/streamersList/components/StreamerList';

export const Streamers = () => {
  const { setSnackbar } = useSnackbar();
  const testHanlder = () => {
    setSnackbar({ text: 'test', type: 'success' });
    getStreamersList();
  };
  return (
    <>
      <AddStreamerForm />
      <Divider />
      <StreamerList />
      <button onClick={testHanlder}>test</button>
    </>
  );
};
