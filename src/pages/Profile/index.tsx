import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { useQuery } from "react-query";
import axios from "axios";
import { IMovie, VideoResponseData } from "../../model/movie";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Profile() {
  const { data } = useQuery(["movies"], async () => {
    return axios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
      {
        params: {
          languageCode: "en",
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
      <div>
        <Typography className="px-12 font-medium" variant="h6" gutterBottom>
          Videos
        </Typography>
        <MoviesSlides id="1" movies={movies} />
      </div>
    </div>
  );
}
