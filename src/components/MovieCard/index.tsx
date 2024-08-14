import { IMovie } from "../../model/movie";
import { FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../utils/helper";
import useAuth from "../../services/auth/hooks/useAuth";
import { useMutation, useQueryClient } from "react-query";
import { Typography } from "@mui/material";
import { useNotificationStore } from "../../store/useNotificationStore";

interface MovieCardProps {
  movie?: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(movie?.imageUrl);
  const [isFavorite, setIsFavorite] = useState(movie?.isFavorite);
  const queryClient = useQueryClient();
  const { authAxios, isAuthenticated } = useAuth();
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );

  const handleError = () => {
    setImgSrc("/images/bg-sign-in.jpeg");
  };

  const addFavoriteMutation = useMutation(
    (id: number) => {
      return authAxios?.post(`/api/v1/videos/favorites`, {
        videoId: id,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["/api/v1/videos/favorites"]);
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
        console.error(error.response.data.message);
        showNotification(error.response.data.message, "error");
        setIsFavorite(true);
      },
    },
  );

  const handleTriggerFavorite = (movie: IMovie) => {
    if (!isAuthenticated) {
      showNotification("Please login first", "error");
      return;
    }
    if (addFavoriteMutation.isLoading || deleteFavoriteMutation.isLoading)
      return;
    if (movie.isFavorite) {
      console.log("delete");
      setIsFavorite(false);
      deleteFavoriteMutation.mutate(movie.id);
    } else {
      console.log("add");
      setIsFavorite(true);
      addFavoriteMutation.mutate(movie.id);
    }
  };

  return (
    <div
      className="relative w-full aspect-[12/20] sm:aspect-[12/18] flex flex-col"
      onClick={() => navigate(`/detail/${movie?.id}`)}
    >
      <div className="group relative w-full flex-1 cursor-pointer overflow-hidden rounded">
        <img
          className="absolute z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.2] group-hover:blur-sm"
          src={imgSrc}
          alt={movie?.name}
          onError={handleError}
        />
        <div className="relative flex h-full flex-col px-3 py-2 text-transparent transition group-hover:bg-black/40 group-hover:text-white">
          <Typography
            className="-translate-y-full font-medium transition duration-300 group-hover:translate-y-0"
            variant="h5"
          >
            Summary
          </Typography>
          <Typography
            className="mt-3 line-clamp-5 -translate-y-1/2 overflow-hidden text-ellipsis transition duration-300 group-hover:translate-y-0"
            variant="body2"
          >
            {movie?.description}
          </Typography>
          <div className="m-auto translate-y-full text-center transition duration-300 group-hover:translate-y-0">
            <Typography variant="h6">Upload Date</Typography>
            <Typography variant="body1">{movie?.updatedAt}</Typography>
          </div>
        </div>
        <div
          className={cn(
            "absolute -right-14 -top-14 h-14 w-14 bg-gray-400 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:top-0 group-hover:opacity-90",
            {
              "bg-red-500": isFavorite,
            },
          )}
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (movie) handleTriggerFavorite(movie);
          }}
        >
          <FavoriteBorder className="absolute right-1 top-1 h-7 w-7" />
        </div>
      </div>
      <Typography className="font-semibold" variant="subtitle1" align="center">
        {movie?.name}
      </Typography>
    </div>
  );
};

export default MovieCard;
