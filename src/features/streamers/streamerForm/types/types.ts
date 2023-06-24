export type PlatfromType =
  | 'Twitch'
  | 'YouTube'
  | 'TikTok'
  | 'Kick'
  | 'Rumble'
  | '';

export interface StreamerModal {
  name: string;
  platfromType: PlatfromType;
  description: string;
}
