import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { useQuery } from "react-query";
import { IMovie, VideoResponseData } from "../../model/movie";
import useAuth from "../../services/auth/hooks/useAuth";

export default function Profile() {
  const { authAxios } = useAuth();
  const { data } = useQuery(["/api/v1/videos/me"], async () => {
    return authAxios.get<VideoResponseData>("/api/v1/videos/me", {
      headers: {
        "accept-language": "en",
      },
    });
  });
  console.log("data", data);
  let movies: IMovie[] = [];
  if (data?.data?.data) {
    console.log(data?.data?.data);
    movies = data?.data?.data?.map((item) => {
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
          Videos
        </Typography>
        <MoviesSlides id="1" movies={movies} />
      </div>
    </div>
  );
}
