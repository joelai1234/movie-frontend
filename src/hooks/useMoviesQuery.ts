import { useQuery } from "react-query";
import { VideoCategory, VideoData, VideoResponseData } from "../model/movie";
import axios from "axios";
import useAuth from "../services/auth/hooks/useAuth";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

interface useMoviesQueryProps {
  category?: string;
  language: string;
  sortBy?: string;
  releaseYear?: string;
  keyword?: string;
  crewId?: number;
  self?: boolean;
}

export default function useMoviesWithFavoriteQuery({
  category,
  language,
  sortBy,
  keyword,
  releaseYear,
  crewId,
  self,
}: useMoviesQueryProps) {
  const { authAxios } = useAuth();

  const { data: favoriteMovieData } = useQuery(
    ["/api/v1/videos/favorites"],
    async () => {
      return authAxios.get<VideoResponseData>(`/api/v1/videos/favorites`, {
        headers: {
          "accept-language": language,
        },
      });
    },
  );

  const { data: movieData } = useQuery(
    [
      "/api/v1/videos",
      sortBy,
      category,
      keyword,
      releaseYear,
      crewId,
      language,
    ],
    async () => {
      let releaseYearStartedAt: string | undefined = undefined;
      let releaseYearEndedAt: string | undefined = undefined;
      if (releaseYear) {
        const years = releaseYear.split("-");
        if (years.length === 1) {
          releaseYearStartedAt = years[0];
          releaseYearEndedAt = years[0];
        } else if (years.length === 2) {
          releaseYearStartedAt = years[0];
          releaseYearEndedAt = years[1];
        }
      }
      if (self) {
        return authAxios.get<VideoResponseData>(
          '/api/v1/videos/me',
          {
            headers: {
              "accept-language": language,
            },
            params: {
              keyword,
              sortBy: sortBy,
              releaseYearStartedAt,
              releaseYearEndedAt,
              category: category === VideoCategory.ALL ? undefined : category,
              crewId,
            },
          },
        );
      } else {
        return axios.get<VideoResponseData>(
          VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
          {
            headers: {
              "accept-language": language,
            },
            params: {
              keyword,
              sortBy: sortBy,
              releaseYearStartedAt,
              releaseYearEndedAt,
              category: category === VideoCategory.ALL ? undefined : category,
              crewId,
            },
          },
        );
      }
    },
  );

  const data: (VideoData & { isFavorite: boolean })[] =
    movieData?.data.data.map((item) => {
      return {
        ...item,
        isFavorite:
          favoriteMovieData?.data.data.some(
            (favorite) => favorite.id === item.id,
          ) ?? false,
      };
    }) ?? [];

  return {
    data,
  };
}
