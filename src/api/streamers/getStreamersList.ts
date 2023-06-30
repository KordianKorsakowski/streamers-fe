import axios from 'axios';
import { apiConfig } from '../../config';
import { wait } from '../../utils/wait';

export const getStreamersList = async () => {
  const response = await axios.get(`${apiConfig.apiUrl}streamers`);
  await wait(500);
  return response.data.data;
};
