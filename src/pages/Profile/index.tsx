import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { formatMovies } from "../../utils/movie";
import useMoviesWithFavoriteQuery from "../../hooks/useMoviesQuery";

export default function Profile() {
  const { data } = useMoviesWithFavoriteQuery({
    language: "en",
  });

  return (
    <div className="space-y-8 py-8">
      <div className="px-10">
        <Typography className="font-medium" variant="h6" gutterBottom>
          Videos
        </Typography>
        <MoviesSlides
          id="1"
          movies={formatMovies({
            data: data,
          })}
        />
      </div>
    </div>
  );
}
