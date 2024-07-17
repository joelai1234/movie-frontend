import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { useQuery } from "react-query";
import { IMovie, VideoResponseData } from "../../model/movie";
import useAuth from "../../services/auth/hooks/useAuth";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Favorites() {
  const { authAxios } = useAuth();
  const { data } = useQuery(["/api/v1/videos/favorites"], async () => {
    return authAxios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos/favorites`,
      {
        headers: {
          "accept-language": "en",
        },
      },
    );
  });

  let movies: IMovie[] = [];
  if (data?.data) {
    console.log(data?.data.data);
    movies = data?.data?.data.map((item) => {
      return {
        id: String(item.id),
        name: item.name,
        imageUrl: item.coverPictureUrl,
        description: "",
        updatedAt: item.updatedAt,
      };
    });
  }

  return (
    <div className="space-y-8 py-8">
      <div className="px-10">
        <Typography className="font-medium" variant="h6" gutterBottom>
          Favorites
        </Typography>
        <MoviesSlides id="1" movies={movies} />
      </div>
    </div>
  );
}
