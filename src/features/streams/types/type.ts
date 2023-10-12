export interface StreamModel {
  id: number;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  game: string;
  averageViewers: number;
}

export interface CreateStreamModel {
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  game: string;
  averageViewers: number;
}
