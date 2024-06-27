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
  createdAt: string;
  updatedAt: string;
}

interface VideoTag {
  id: number;
  videoId: number;
  type: string;
  value: string;
}

export interface VideoAo {
  createdAt: string;
  updatedAt: string;
  id: number;
  ownerId: number;
  url: string;
  status: "PENDING";
  fileName: string;
  coverPictureUrl: string;
  name: string;
  videoDetail: VideoDetail;
  videoTags: VideoTag[];
}

export interface VideoResponseData {
  data: VideoAo[];
  count: number;
  page: number;
  pageCount: number;
  total: number;
}
