import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import Banner from "../../components/Banner";
import { movies as mockMovies } from "../../data/movies";
import { useQuery } from "react-query";
import axios from "axios";
import { IMovie, VideoResponseData } from "../../model/movie";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Home() {
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
    <div>
      <Banner />
      <div className="h-2 w-full bg-red-600" />
      <div className="space-y-8 px-2 py-8">
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Latest
          </Typography>
          <MoviesSlides id="0" movies={movies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Binge-Worthy Shows
          </Typography>
          <MoviesSlides id="1" movies={mockMovies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Crime-Time
          </Typography>
          <MoviesSlides id="2" movies={mockMovies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Leaving Soon
          </Typography>
          <MoviesSlides id="3" movies={mockMovies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Based On a True Story
          </Typography>
          <MoviesSlides id="4" movies={mockMovies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            We Are Proud
          </Typography>
          <MoviesSlides id="5" movies={mockMovies} />
        </div>
      </div>
    </div>
  );
}
