export interface IMovie {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  updatedAt: string;
}

interface VideoDetail {
  id: number;
  videoId: number;
  languageCode: string;
  title: string;
  description: string;
}

interface VideoTag {
  id: number;
  videoId: number;
  type: string;
  value: string;
}

export interface VideoData {
  updatedAt: string;
  totalViews: number;
  last30DaysViews: number;
  last7DaysViews: number;
  id: number;
  ownerId: number;
  url: string;
  status: string;
  fileName: string;
  coverPictureUrl: string;
  name: string;
  releaseYear: number;
  duration: number;
  categories: string[];
  rating: string;
  videoDetail: VideoDetail;
  videoTags: VideoTag[];
}

export interface VideoResponseData {
  data: VideoData[];
  count: number;
  page: number;
  pageCount: number;
  total: number;
}


export enum VideoCategory {
  ALL = 'ALL',
  ACTION = 'ACTION',
  ADVENTURE = 'ADVENTURE',
  ANIMATION = 'ANIMATION',
  COMEDY = 'COMEDY',
  CRIME = 'CRIME',
  DOCUMENTARY = 'DOCUMENTARY',
  DRAMA = 'DRAMA',
  FAMILY = 'FAMILY',
  FANTASY = 'FANTASY',
  HISTORY = 'HISTORY',
  HORROR = 'HORROR',
  MUSICAL = 'MUSICAL',
  MYSTERY = 'MYSTERY',
  ROMANCE = 'ROMANCE',
  SCI_FI = 'SCI_FI',
  SPORT = 'SPORT',
  SUPERHERO = 'SUPERHERO',
  THRILLER = 'THRILLER',
  WAR = 'WAR',
}

export enum VideoRating {
  G = 'G',
  P = 'P',
  PG = 'PG',
  R = 'R',
}