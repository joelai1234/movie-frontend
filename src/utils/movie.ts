import { VideoData } from "../model/movie";

export const formatMovies = (data: VideoData[]) => {
  return data.map((item) => {
    return {
      id: String(item.id),
      name: item.name,
      imageUrl: item.coverPictureUrl,
      description: item.videoDetail.description,
      updatedAt: item.updatedAt,
    };
  });
};
