import { PlatfromType } from '../../streamerForm/types/types';

export interface StreamerItemInterface {
  id: number;
  name: string;
  platfromType: PlatfromType;
  description: string;
  downvotes: number;
  upvotes: number;
}
