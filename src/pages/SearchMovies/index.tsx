import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMovie, VideoCategory, VideoResponseData } from "../../model/movie";
import axios from "axios";
import { Button, Chip, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ImageWithFallback from "../../components/ImageWithFallback";
import CustomSelect from "../../components/CustomSelect";
import { areaList, categoryList, releaseYearList } from "../../data/movies";
import ArrowSortIcon from "../../components/ArrowSortIcon";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function SearchMovies() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [category, setCategory] = useState(VideoCategory.ALL);
  const [releaseYear, setReleaseYear] = useState("all");
  const [area, setArea] = useState("all");
  const navigate = useNavigate();
  const [sortDirection, setSortDirection] = useState<"top" | "down" | "none">(
    "none",
  );

  const { data: dataRes } = useQuery(
    ["/api/v1/videos", search, category, releaseYear],
    async () => {
      const years = releaseYear.split("-");
      if (years.length === 2) {
        return axios.get<VideoResponseData>(
          VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
          {
            params: {
              languageCode: "en",
              keyword: search,
              category: category === VideoCategory.ALL ? undefined : category,
              releaseYearStartedAt: years[0],
              releaseYearEndedAt: years[1],
            },
          },
        );
      }
      return axios.get<VideoResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          params: {
            languageCode: "en",
            keyword: search,
            category: category === VideoCategory.ALL ? undefined : category,
            releaseYearStartedAt:
              releaseYear === "all" ? undefined : releaseYear,
            releaseYearEndedAt: releaseYear === "all" ? undefined : releaseYear,
          },
        },
      );
    },
  );


  let data = dataRes?.data.data.sort((a, b) => b.id - a.id);

  if (sortDirection !== "none") {
    data = data?.sort((a, b) => {
      if (sortDirection === "top") {
        return a.releaseYear - b.releaseYear;
      } else {
        return b.releaseYear - a.releaseYear;
      }
    });
  }

  let movies: IMovie[] = [];
  if (data) {
    movies = data?.map((item) => {
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
            <div className="flex space-x-6">
              <CustomSelect
                data={categoryList.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                title="Category"
                onChange={(value) => {
                  setCategory(value as VideoCategory);
                }}
                value={category}
              />
              <CustomSelect
                data={releaseYearList.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                title="Release Year"
                value={releaseYear}
                onChange={(value) => {
                  setReleaseYear(value);
                }}
              />
              <CustomSelect
                data={areaList.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                title="Area(dev)"
                value={area}
                onChange={(value) => {
                  setArea(value);
                }}
                col={3}
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <div
                    className="flex cursor-pointer items-center justify-center gap-2"
                    onClick={() => {
                      if (sortDirection === "top") {
                        setSortDirection("down");
                      } else if (sortDirection === "down") {
                        setSortDirection("none");
                      } else {
                        setSortDirection("top");
                      }
                    }}
                  >
                    <Typography variant="body2">Sort by</Typography>
                    <Typography
                      className="font-medium text-yellow-500"
                      variant="body2"
                    >
                      Release date
                    </Typography>
                    <ArrowSortIcon direction={sortDirection} />
                  </div>
                </div>
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
          <Divider className="mb-6 mt-1 bg-white" />
          <div>
            {isDisplayDetail && (
              <div>
                {data?.map((movie) => {
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
