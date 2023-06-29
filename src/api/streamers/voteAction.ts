import axios from 'axios';
import { VoteType } from '../../features/streamers/streamersList/types/types';
import { apiConfig } from '../../config';

export const voteAction = async (id: number, voteType: VoteType) => {
  const response = await axios.put(
    `${apiConfig.apiUrl}streamers/${id}?vote=${voteType}2`
  );
  return response.data;
};
