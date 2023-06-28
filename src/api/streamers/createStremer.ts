import axios from 'axios';
import { StreamerModal } from '../../features/streamers/streamerForm/types/types';

export const createStreamer = async (payload: StreamerModal) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/streamers`,
      payload
    );
    return response.data;
  } catch (error) {
    throw new Error('error');
  }
};
