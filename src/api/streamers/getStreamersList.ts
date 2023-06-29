import axios from 'axios';
import { apiConfig } from '../../config';
export const getStreamersList = async () => {
  try {
    const response = await axios.get(`${apiConfig.apiUrl}streamers`);
    return response.data.data;
  } catch (error) {
    throw new Error('error');
  }
};
