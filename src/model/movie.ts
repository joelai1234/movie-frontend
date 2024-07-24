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
  videoCasts: Cast[];
  videoDirectors: Cast[];
  videoWriters: Cast[];
  supportedLanguages: string[];
}

export interface Cast {
  createdAt: string;
  updatedAt: string;
  id: number;
  videoId: number;
  crewId: number;
  role: string;
  crew: Crew;
}

export interface Crew {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  roles: string[];
  introduction: string;
  pictureUrl: string;
}

export interface VideoResponseData {
  data: VideoData[];
  count: number;
  page: number;
  pageCount: number;
  total: number;
}

export enum VideoCategory {
  ALL = "ALL",
  ACTION = "ACTION",
  ADVENTURE = "ADVENTURE",
  ANIMATION = "ANIMATION",
  COMEDY = "COMEDY",
  CRIME = "CRIME",
  DOCUMENTARY = "DOCUMENTARY",
  DRAMA = "DRAMA",
  FAMILY = "FAMILY",
  FANTASY = "FANTASY",
  HISTORY = "HISTORY",
  HORROR = "HORROR",
  MUSICAL = "MUSICAL",
  MYSTERY = "MYSTERY",
  ROMANCE = "ROMANCE",
  SCI_FI = "SCI_FI",
  SPORT = "SPORT",
  SUPERHERO = "SUPERHERO",
  THRILLER = "THRILLER",
  WAR = "WAR",
}

export enum VideoRating {
  G = "G",
  P = "P",
  PG = "PG",
  R = "R",
}

export interface CommentsResponseData {
  data: CommentsData[];
  count: number;
  page: number;
  pageCount: number;
  total: number;
}

export interface CommentsData {
  createdAt: string;
  id: number;
  memberId: number;
  member: CommentMemberData;
  videoId: number;
  rating: number;
  content: string;
  reactionLikeCount: number;
  reactionDislikeCount: number;
  totalCommentReplyCount: number;
  videoCommentReactions: VideoCommentReaction[];
}

export interface VideoCommentReaction {
  createdAt: string;
  updatedAt: string;
  id: number;
  memberId: number;
  videoId: number;
  videoCommentId: number;
  videoCommentReplyId: number;
  reactionType: string;
}

export interface CommentMemberData {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
}

export enum VideoCommentReactionType {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
}

export interface RolesData {
  createdAt: string
  updatedAt: string
  id: number
  name: string
  roles: string[]
  introduction: string
  pictureUrl: string
  born: string
  education: string
  nickname: string
  spouse: string
  websites: string[]
  videoCrews: VideoCrew[]
  totalViews: number
}

export interface VideoCrew {
  createdAt: string
  updatedAt: string
  id: number
  videoId: number
  crewId: number
  role: string
  video: Video
}

export interface Video {
  createdAt: string
  updatedAt: string
  id: number
  ownerId: number
  sourceType: string
  url: string
  status: string
  fileName: string
  coverPictureUrl: string
  name: string
  releaseYear: number
  duration: number
  categories: string[]
  rating: string
  videoDetail: string // VideoDetail
}

export interface MoviePayload {
  sourceType: "FILE" | "URL";
  source: string;
  coverPictureUrl: string;
  name: string;
  releaseYear: number;
  categories: string[];
  rating: string;
  videoDetails: MoviePayloadVideoDetail[];
  videoAttachments: MoviePayloadVideoAttachment[];
  videoSubtitles: MoviePayloadVideoSubtitle[];
  videoTags: MoviePayloadVideoTag[];
  videoDirectorCrewIds: number[];
  videoWriterCrewIds: number[];
  videoCastCrewIds: number[];
}

export interface MoviePayloadVideoDetail {
  languageCode: string;
  title: string;
  description: string;
}

export interface MoviePayloadVideoAttachment {
  type: string;
  url: string;
  order: number;
}

export interface MoviePayloadVideoSubtitle {
  languageCode: string;
  url: string;
  fileName: string;
}

export interface MoviePayloadVideoTag {
  type: string;
  value: string;
}
