import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import Banner from "../../components/Banner";
import { useQuery } from "react-query";
import axios from "axios";
import { VideoCategory, VideoResponseData } from "../../model/movie";
import { formatMovies } from "../../utils/movie";
import { useState } from "react";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Home() {
  const [category, setCategory] = useState(VideoCategory.ALL);

  const { data: updatedAtData } = useQuery(
    ["/api/v1/videos", "UPDATED_AT"],
    async () => {
      return axios.get<VideoResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          params: {
            languageCode: "en",
            sortBy: "UPDATED_AT",
          },
        },
      );
    },
  );

  const { data: totalViewsData } = useQuery(
    ["/api/v1/videos", "TOTAL_VIEWS"],
    async () => {
      return axios.get<VideoResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          params: {
            languageCode: "en",
            sortBy: "TOTAL_VIEWS",
          },
        },
      );
    },
  );

  const { data: last7DaysViewsData } = useQuery(
    ["/api/v1/videos", "LAST_7_DAYS_VIEWS"],
    async () => {
      return axios.get<VideoResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          params: {
            languageCode: "en",
            sortBy: "LAST_7_DAYS_VIEWS",
          },
        },
      );
    },
  );

  const { data: last30DaysViewsData } = useQuery(
    ["/api/v1/videos", "LAST_30_DAYS_VIEWS"],
    async () => {
      return axios.get<VideoResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          params: {
            languageCode: "en",
            sortBy: "LAST_30_DAYS_VIEWS",
          },
        },
      );
    },
  );

  return (
    <div>
      <Banner setCategory={setCategory} />
      <div className="h-2 w-full bg-red-600" />
      {updatedAtData &&
        updatedAtData?.data.data.filter((item) =>
          category ? item.categories.includes(category) : true,
        ).length > 0 && (
          <div className="space-y-8 px-10 py-8">
            {updatedAtData && (
              <div>
                <Typography className="font-medium" variant="h6" gutterBottom>
                  Latest
                </Typography>
                <MoviesSlides
                  id="0"
                  movies={formatMovies(updatedAtData?.data.data, category)}
                />
              </div>
            )}
            {last7DaysViewsData && (
              <div>
                <Typography className="font-medium" variant="h6" gutterBottom>
                  Views in the Last 7 Days
                </Typography>
                <MoviesSlides
                  id="2"
                  movies={formatMovies(last7DaysViewsData?.data.data, category)}
                />
              </div>
            )}
            {last30DaysViewsData && (
              <div>
                <Typography className="font-medium" variant="h6" gutterBottom>
                  Views in the Last 30 Days
                </Typography>
                <MoviesSlides
                  id="3"
                  movies={formatMovies(
                    last30DaysViewsData?.data.data,
                    category,
                  )}
                />
              </div>
            )}
            {totalViewsData && (
              <div>
                <Typography className="font-medium" variant="h6" gutterBottom>
                  Total Views
                </Typography>
                <MoviesSlides
                  id="1"
                  movies={formatMovies(totalViewsData?.data.data, category)}
                />
              </div>
            )}
          </div>
        )}
    </div>
  );
}
