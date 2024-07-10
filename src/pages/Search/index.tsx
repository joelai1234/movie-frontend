import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMovie, VideoResponseData } from "../../model/movie";
import axios from "axios";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ImageWithFallback from "../../components/ImageWithFallback";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Search() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const navigate = useNavigate();
  const { data } = useQuery(["/api/v1/videos", search], async () => {
    return axios.get<VideoResponseData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
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

  const [isDisplayDetail, setIsDisplayDetail] = useState(false);

  return (
    <div className="pt-[64px]">
      <div className="px-10 py-5">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-3">
            <Button
              className="normal-case text-white"
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
            <Typography variant="h4">{search}</Typography>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="space-x-6">
              <FormControl variant="standard">
                <Select
                  disableUnderline
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={10}
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Category</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <Select
                  disableUnderline
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={10}
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Release Year</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <Select
                  disableUnderline
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={10}
                  // value={age}
                  // onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={10}>Area</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <Typography variant="body1">Sort by</Typography>
                <FormControl variant="standard">
                  <Select
                    disableUnderline
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={10}
                    label="Age"
                  >
                    <MenuItem value={10}>Release date </MenuItem>
                  </Select>
                </FormControl>
                <IconButton
                  className={isDisplayDetail ? "" : "text-yellow-500"}
                  size="small"
                  onClick={() => {
                    setIsDisplayDetail(false);
                  }}
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  className={isDisplayDetail ? "text-yellow-500" : ""}
                  size="small"
                  onClick={() => {
                    setIsDisplayDetail(true);
                  }}
                >
                  <ViewListIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <Divider className="mb-6 mt-3 bg-white" />
          <div>
            {isDisplayDetail && (
              <div>
                {data?.data.data.map((movie) => {
                  return (
                    <>
                      <div
                        className="flex cursor-pointer gap-8"
                        onClick={() => {
                          navigate(`/detail/${movie.id}`);
                        }}
                      >
                        <ImageWithFallback
                          className="h-60 w-44 rounded-sm"
                          src={movie.coverPictureUrl}
                          fallbackSrc="/images/bg-sign-in.jpeg"
                          alt="video"
                        />
                        <div className="flex-1 space-y-3">
                          <Typography className="font-semibold" variant="body1">
                            {movie.name}
                          </Typography>
                          <div className="flex items-center gap-1">
                            <Typography variant="body1">
                              {movie.releaseYear} &bull; {movie?.rating} &bull;
                              1h 35m
                            </Typography>{" "}
                            &bull;
                            <StarIcon
                              fontSize="small"
                              className="text-yellow-500"
                            />
                            <Typography variant="body2">
                              {movie.rating}
                              <Typography
                                className="inline text-gray-500"
                                variant="body2"
                              >
                                (1k)
                              </Typography>{" "}
                              &bull; {movie.totalViews} Views
                            </Typography>
                          </div>
                          <div className="flex">
                            <Typography
                              className="w-24 shrink-0 text-gray-500"
                              variant="body2"
                            >
                              Director
                            </Typography>
                            <Typography variant="body2">
                              Chris Pratt
                              {movie?.videoDirectors
                                ?.map((director) => director.crew.name)
                                .join(", ")}
                            </Typography>
                          </div>
                          <div className="flex">
                            <Typography
                              className="w-24 shrink-0 text-gray-500"
                              variant="body2"
                            >
                              Cast
                            </Typography>
                            <Typography variant="body2">
                              Chris Pratt, Samuel L. Jackson, Hannah Waddingham,
                              Ving Rhames, Nicholas Hoult, Cecily Strong
                            </Typography>
                          </div>
                          <div className="flex">
                            <Typography
                              className="w-24 shrink-0 text-gray-500"
                              variant="body2"
                            >
                              Category
                            </Typography>
                            <Typography variant="body2">
                              Animation, Family
                            </Typography>
                          </div>
                          <div className="flex">
                            <Typography
                              className="w-24 shrink-0 text-gray-500"
                              variant="body2"
                            >
                              Subtitle
                            </Typography>
                            <Typography variant="body2">
                              Chinese, English
                            </Typography>
                          </div>
                          <div className="space-x-2">
                            <Chip label="Animation" variant="outlined" />
                            <Chip label="Adventure" variant="outlined" />
                            <Chip label="Comedy" variant="outlined" />
                          </div>
                        </div>
                        <div className="space-x-4">
                          <IconButton className="bg-gray-800">
                            <FavoriteBorderIcon />
                          </IconButton>
                          <IconButton className="bg-gray-800">
                            <StarBorderIcon />
                          </IconButton>
                        </div>
                      </div>
                      <Divider className="my-6" />
                    </>
                  );
                })}
              </div>
            )}
            {!isDisplayDetail && (
              <div className="flex flex-wrap gap-4">
                {movies.map((movie) => {
                  return <MovieCard key={movie.id} movie={movie} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
