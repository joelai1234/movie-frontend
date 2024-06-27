import { Typography } from "@mui/material";

import MoviesSlides from "../../components/MoviesSlides";
import { useQuery } from "react-query";
import axios from "axios";
import { IMovie, VideoResponseData } from "../../model/movie";
import { useUserDataStore } from "../../store/useUserDataStore";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Favorites() {
  const { userData } = useUserDataStore();
  const { data } = useQuery(["/api/v1/video/favorites"], async () => {
    return axios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/video/favorites`,
      {
        params: {
          languageCode: "en",
        },
        headers: {
          Authorization: `Bearer ${userData?.accessToken}`,
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
          Favorites
        </Typography>
        <MoviesSlides id="1" movies={movies} />
      </div>
    </div>
  );
}
