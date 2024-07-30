import { useMutation, useQuery, useQueryClient } from "react-query";
import useAuth from "../services/auth/hooks/useAuth";
import { VideoData, VideoResponseData } from "../model/movie";
import { useEffect, useState } from "react";
import { useNotificationStore } from "../store/useNotificationStore";
import axios from "axios";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export const useMovieFavorite = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const queryClient = useQueryClient();
  const { authAxios, isAuthenticated } = useAuth();
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );

  const { data: movieRes } = useQuery(["/api/v1/videos", id], async () => {
    return axios.get<VideoData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos/${id}`,
      {
        headers: {
          "accept-language": "en",
        },
      },
    );
  });

  const { data: favoriteMovieData, refetch } = useQuery(
    ["/api/v1/videos/favorites"],
    async () => {
      return authAxios?.get<VideoResponseData>(`/api/v1/videos/favorites`, {
        headers: {
          "accept-language": "en",
        },
      });
    },
  );

  const addFavoriteMutation = useMutation(
    (id: number) => {
      return authAxios?.post(`/api/v1/videos/favorites`, {
        videoId: id,
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
      onError: (error: { response: { data: { message: string } } }) => {
        console.error(error.response.data.message);
        showNotification(error.response.data.message, "error");
        setIsFavorite(false);
      },
    },
  );

  const deleteFavoriteMutation = useMutation(
    (id: number) => {
      return authAxios?.delete(`/api/v1/videos/${id}/favorites`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["/api/v1/videos/favorites"]);
      },
      onError: (error: { response: { data: { message: string } } }) => {
        showNotification(error.response.data.message, "error");
        setIsFavorite(true);
      },
    },
  );

  const handleTriggerFavorite = () => {
    if (!isAuthenticated) {
      showNotification("Please login first", "error");
      return;
    }
    if (addFavoriteMutation.isLoading || deleteFavoriteMutation.isLoading)
      return;
    if (isFavorite) {
      setIsFavorite(false);
      deleteFavoriteMutation.mutate(id);
    } else {
      setIsFavorite(true);
      addFavoriteMutation.mutate(id);
    }
  };

  useEffect(() => {
    if (movieRes && favoriteMovieData) {
      favoriteMovieData.data.data;
      const movie = movieRes.data;
      const favoriteMovie = favoriteMovieData.data.data.find(
        (video) => video.id === movie.id,
      );
      if (favoriteMovie) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [movieRes, favoriteMovieData]);

  return {
    isFavorite,
    handleTriggerFavorite,
  };
};
