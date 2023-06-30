import axios from 'axios';
import { apiConfig } from '../../config';
import { wait } from '../../utils/wait';
export const getStreamer = async (id: number) => {
  const response = await axios.get(`${apiConfig.apiUrl}streamers/${id}`);
  await wait(1000);
  return response.data.data;
};
