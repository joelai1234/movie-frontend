import { useNavigate } from "react-router-dom";
import { IMovie, VideoCategory } from "../../model/movie";
import { Chip, Divider, IconButton, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import StarIcon from "@mui/icons-material/Star";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
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

interface MovieTableProps {
  keyword?: string;
  crewId?: number;
}

export default function MovieTable({ keyword, crewId }: MovieTableProps) {
  const [category, setCategory] = useState(VideoCategory.ALL);
  const [releaseYear, setReleaseYear] = useState("all");
  const [sortBy, setSortBy] = useState("UPDATED_AT");
  const navigate = useNavigate();
  const [sortDirection, setSortDirection] = useState<"top" | "down" | "none">(
    "top",
  );

  const { data } = useMoviesWithFavoriteQuery({
    keyword,
    category,
    releaseYear: releaseYear === "all" ? undefined : releaseYear,
    sortBy,
    language:'en',
    crewId,
  });

  let movies: IMovie[] = [];
  if (data) {
    movies = formatMovies({ data });
  }

  const [isDisplayDetail, setIsDisplayDetail] = useState(false);

  const details = data?.map((movie) => {
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
                {movie.releaseYear} &bull; {movie?.rating} &bull; {" "}{convertMinutes(movie?.duration ?? 0)} 
              </Typography>{" "}
              &bull;

              <StarIcon fontSize="small" className="text-yellow-500" />
              <Typography variant="body2">
                {movie?.averageRating ?? 0}
                <Typography className="inline text-gray-500" variant="body2">
                  ({movie.totalCommentCount})
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
          {/* <div className="space-x-4">
            <IconButton className="bg-gray-800">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton className="bg-gray-800">
              <StarBorderIcon />
            </IconButton>
          </div> */}
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
    <div>
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
          <div className="flex flex-wrap gap-4">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
