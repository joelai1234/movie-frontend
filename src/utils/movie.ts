import { VideoCategory, VideoData } from "../model/movie";

export const formatMovies = (data: VideoData[], category?: VideoCategory) => {
  return data
    ?.filter((item) => (category ? item.categories.includes(category) : true))
    .map((item) => {
      return {
        id: String(item.id),
        name: item.name,
        imageUrl: item.coverPictureUrl,
        description: item.videoDetail.description,
        updatedAt: item.updatedAt,
      };
    });
};
