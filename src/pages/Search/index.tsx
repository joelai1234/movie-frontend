import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { IMovie, VideoResponseData } from "../../model/movie";
import axios from "axios";
import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import { useUserDataStore } from "../../store/useUserDataStore";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Search() {
  const { userData } = useUserDataStore();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { data } = useQuery(["/api/v1/videos/me", search], async () => {
    return axios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos/me`,
      {
        params: {
          languageCode: "en",
          keyword: search,
        },
        headers: {
          Authorization: `Bearer ${userData?.accessToken}`,
        },
      },
    );
  });

  let movies: IMovie[] = [];
  if (data?.data) {
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
    <div className="mt-16 h-[calc(100vh-64px)] px-2 py-8">
      <div>
        <Typography className="px-12 font-medium" variant="h6" gutterBottom>
          Search
        </Typography>
        <MoviesSlides id="0" movies={movies} />
      </div>
    </div>
  );
}
