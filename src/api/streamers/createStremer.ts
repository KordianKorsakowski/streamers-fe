import axios from 'axios';
import { StreamerModal } from '../../features/streamers/streamerForm/types/types';
import { apiConfig } from '../../config';
import { wait } from '../../utils/wait';

export const createStreamer = async (payload: StreamerModal) => {
  const response = await axios.post(`${apiConfig.apiUrl}streamers`, payload);
  await wait(1000);
  return response.data;
};
