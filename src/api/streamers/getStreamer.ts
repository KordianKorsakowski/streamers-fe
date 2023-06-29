import axios from 'axios';
import { apiConfig } from '../../config';
export const getStreamer = async (id: number) => {
  const response = await axios.get(`${apiConfig.apiUrl}streamers/${id}`);
  console.log('response  ', response);
  return response.data.data;
};
