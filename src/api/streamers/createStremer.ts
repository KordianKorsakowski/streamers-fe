import axios from 'axios';
import { StreamerModal } from '../../features/streamers/streamerForm/types/types';
import { apiConfig } from '../../config';

export const createStreamer = async (payload: StreamerModal) => {
  try {
    const response = await axios.post(`${apiConfig.apiUrl}streamers`, payload);
    return response.data;
  } catch (error) {
    throw new Error('error');
  }
};
