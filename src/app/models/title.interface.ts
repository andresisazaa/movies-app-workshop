export enum TitleType {
  MOVIE = 'movie',
  TV_SHOW = 'tv',
}

export interface Title {
  id: number;
  image?: string;
  name: string;
  overview: string;
  releaseDate?: string;
  voteAverage: number;
  voteCount: number;
  type: TitleType;
}

export interface TitleDetails {
  id: number;
  name: string;
  overview: string;
  releaseDate: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  image: string;
  voteAverage: number;
  voteCount: number;
  type: TitleType;
}

export interface TitleReview {
  id: string;
  author: string;
  content: string;
  publishDate: string;
  lastUpdateDate: string;
  url: string;
}
