import { PlatfromType } from '../../streamerForm/types/types';

export interface StreamerItemInterface {
  id: number;
  name: string;
  platfromType: PlatfromType;
  description: string;
  downvote: number;
  upvote: number;
  urlImg?: string;
}

export type VoteType = 'upvote' | 'downvote';
