import { Typography } from "@mui/material";
import { IMovie } from "../../model/movie";
import { FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie?: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-min" onClick={() => navigate(`/detail/${movie?.id}`)}>
      <div className="group relative h-80 w-56 cursor-pointer overflow-hidden rounded">
        <img
          className="absolute z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.2] group-hover:blur-sm"
          src={movie?.imageUrl}
          alt={movie?.name}
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
          className="absolute -right-14 -top-14 h-14 w-14 bg-gray-400 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:top-0 group-hover:opacity-90"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
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
