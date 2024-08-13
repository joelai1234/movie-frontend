import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { useQuery } from "react-query";
import { VideoResponseData } from "../../model/movie";
import useAuth from "../../services/auth/hooks/useAuth";
import { formatMovies } from "../../utils/movie";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Favorites() {
  const { authAxios } = useAuth();
  const { data } = useQuery(["/api/v1/videos/favorites"], async () => {
    return authAxios?.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos/favorites`,
      {
        headers: {
          "accept-language": "en",
        },
      },
    );
  });

  return (
    <div className="space-y-8 py-8">
      <div className="px-10">
        <Typography className="font-medium" variant="h6" gutterBottom>
          Favorites
        </Typography>
        {
          data?.data.data.length === 0 && (
            <div className="mt-24 flex items-center justify-center">
              <img
                className="h-[300px] w-[300px]"
                src="/images/bg-empty.png"
                alt="no movies"
              />
            </div>
          )
        }
        <MoviesSlides
          id="1"
          movies={formatMovies({
            data:
              data?.data.data.map((item) => ({ ...item, isFavorite: true })) ??
              [],
          })}
        />
      </div>
    </div>
  );
}
