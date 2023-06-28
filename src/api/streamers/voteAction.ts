import axios from 'axios';
import { VoteType } from '../../features/streamers/streamersList/types/types';

export const voteAction = async (id: number, voteType: VoteType) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/streamers/${id}?vote=${voteType}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('error');
  }
};
