import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { IMovie, VideoResponseData } from "../../model/movie";
import axios from "axios";
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Search() {
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
    <div className="pt-[64px]">
      <div className="px-10 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-3">
            <Button
              className="normal-case text-white"
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
            >
              Back
            </Button>
            <Typography variant="h4">Amy Poehler’s movies (95)</Typography>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );

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
