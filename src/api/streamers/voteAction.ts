import axios from 'axios';
import { VoteType } from '../../features/streamers/streamersList/types/types';
import { apiConfig } from '../../config';

export const voteAction = async (id: number, voteType: VoteType) => {
  try {
    const response = await axios.put(
      `${apiConfig.apiUrl}${id}?vote=${voteType}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('error');
  }
};
