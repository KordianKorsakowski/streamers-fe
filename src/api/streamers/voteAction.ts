import axios from 'axios';
import { VoteType } from '../../features/streamers/streamersList/types/types';

export const voteAction = async (id: number, voteType: VoteType) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/streamers/${id}?vote=${voteType}`
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
