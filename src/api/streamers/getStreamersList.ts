import axios from 'axios';
import { apiConfig } from '../../config';
export const getStreamersList = async () => {
  const response = await axios.get(`${apiConfig.apiUrl}streamers`);
  return response.data.data;
};
