import axios from 'axios';
import { apiConfig } from '../../config';
export const getStreamer = async (id: number) => {
  try {
    const response = await axios.get(`${apiConfig.apiUrl}streamers/${id}`);
    console.log('response  ', response);

    return response.data.data;
  } catch (error) {
    throw new Error('error');
  }
};
