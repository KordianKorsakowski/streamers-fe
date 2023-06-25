import axios from 'axios';
import { StreamerModal } from '../../features/streamers/streamerForm/types/types';

export const createStreamer = async (payload: StreamerModal) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/streamers`,
      payload
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error('error');
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
