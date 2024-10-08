import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { IMovie, VideoCategory } from "../../model/movie";
import { Button, Chip, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import StarIcon from "@mui/icons-material/Star";
import ImageWithFallback from "../../components/ImageWithFallback";
import CustomSelect from "../../components/CustomSelect";
import {
  categoryList,
  releaseYearList,
  sortByTypeOptions,
} from "../../data/movies";
import ArrowSortIcon from "../../components/ArrowSortIcon";
import { convertMinutes, formatMovies } from "../../utils/movie";
import useMoviesWithFavoriteQuery from "../../hooks/useMoviesQuery";

export default function SearchMovies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const categoryParam = searchParams.get("category");
  const releaseYearParam = searchParams.get("releaseYear");
  const [category, setCategory] = useState(categoryParam ?? VideoCategory.ALL);
  const [releaseYear, setReleaseYear] = useState(releaseYearParam ?? "all");
  const [sortBy, setSortBy] = useState("UPDATED_AT");
  const [isDisplayDetail, setIsDisplayDetail] = useState(false);

  const navigate = useNavigate();
  const [sortDirection, setSortDirection] = useState<"top" | "down" | "none">(
    "top",
  );

  const { data } = useMoviesWithFavoriteQuery({
    keyword: search ?? undefined,
    category,
    releaseYear: releaseYear === "all" ? undefined : releaseYear,
    sortBy,
    language: "en",
  });

  if (data?.length === 1 && search === data[0].name) {
    return <Navigate to={`/detail/${data[0].id}`} replace />;
  }

  let movies: IMovie[] = [];
  if (data) {
    movies = formatMovies({ data });
  }

  const details = data?.map((movie) => {
    return (
      <>
        <div
          className="flex cursor-pointer gap-8 flex-col sm:flex-row"
          onClick={() => {
            navigate(`/detail/${movie.id}`);
          }}
        >
          <ImageWithFallback
             className="w-2/3 aspect-[3/4] mx-auto sm:mx-0 sm:h-60 sm:w-44 rounded-sm object-cover"
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
                {movie.releaseYear} &bull; {movie?.rating} &bull;{" "}
                {convertMinutes(movie?.duration ?? 0)}
              </Typography>{" "}
              &bull;
              <StarIcon fontSize="small" className="text-yellow-500" />
              <Typography variant="body2">
                {movie.averageRating}
                <Typography className="inline text-gray-500" variant="body2">
                  ({movie?.totalCommentCount})
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
                Chris Pratt, Samuel L. Jackson, Hannah Waddingham, Ving Rhames,
                Nicholas Hoult, Cecily Strong
              </Typography>
            </div>
            <div className="flex">
              <Typography
                className="w-24 shrink-0 text-gray-500"
                variant="body2"
              >
                Category
              </Typography>
              <Typography variant="body2">Animation, Family</Typography>
            </div>
            <div className="flex">
              <Typography
                className="w-24 shrink-0 text-gray-500"
                variant="body2"
              >
                Subtitle
              </Typography>
              <Typography variant="body2">Chinese, English</Typography>
            </div>
            <div className="space-x-2">
              <Chip label="Animation" variant="outlined" />
              <Chip label="Adventure" variant="outlined" />
              <Chip label="Comedy" variant="outlined" />
            </div>
          </div>
        </div>
        <Divider className="my-6" />
      </>
    );
  });

  if (sortDirection === "down") {
    movies.reverse();
    details?.reverse();
  }

  return (
    <div className="pt-[64px]">
      <div className="px-5 sm:px-10 py-5">
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
                  const currentParams = new URLSearchParams(searchParams);
                  currentParams.set("category", value);
                  setSearchParams(currentParams);
                }}
                value={category}
              />
              <CustomSelect
                className="hidden sm:block"
                data={releaseYearList.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                title="Release Year"
                value={releaseYear}
                onChange={(value) => {
                  setReleaseYear(value);
                  const currentParams = new URLSearchParams(searchParams);
                  currentParams.set("releaseYear", value);
                  setSearchParams(currentParams);
                }}
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center">
                  <div className="flex cursor-pointer items-center justify-center gap-2">
                    <Typography variant="body2">Sort by</Typography>
                    <CustomSelect
                      data={sortByTypeOptions.map((data) => ({
                        label: data.name,
                        value: data.value,
                      }))}
                      title="Latest"
                      value={sortBy}
                      onChange={(value) => {
                        setSortBy(value);
                      }}
                      width={240}
                      col={1}
                    />
                    <div
                      onClick={() => {
                        if (sortDirection === "top") {
                          setSortDirection("down");
                        } else if (sortDirection === "down") {
                          setSortDirection("top");
                        }
                      }}
                    >
                      <ArrowSortIcon direction={sortDirection} />
                    </div>
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
            {isDisplayDetail && <div>{details}</div>}
            {!isDisplayDetail && (
              <div className="grid grid-cols-3 flex-wrap gap-4 sm:flex">
                {movies.map((movie) => {
                  return (
                    <div className="sm:w-56">
                      <MovieCard key={movie.id} movie={movie} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
