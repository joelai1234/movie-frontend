import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import Banner from "../../components/Banner";
import { VideoCategory } from "../../model/movie";
import { formatMovies } from "../../utils/movie";
import { useState } from "react";
import useMoviesWithFavoriteQuery from "../../hooks/useMoviesQuery";

export default function Home() {
  const [category, setCategory] = useState<VideoCategory>();

  const { data: updatedAtData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "UPDATED_AT",
    language: "en",
  });

  const { data: totalViewsData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "TOTAL_VIEWS",
    language: "en",
  });

  const { data: last7DaysViewsData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "LAST_7_DAYS_VIEWS",
    language: "en",
  });

  const { data: last30DaysViewsData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "LAST_30_DAYS_VIEWS",
    language: "en",
  });

  const { data: TotalCommentAndReplyCountData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "TOTAL_COMMENT_AND_REPLY_COUNT",
    language: "en",
  });

  const { data: AverageRatingData } = useMoviesWithFavoriteQuery({
    category,
    sortBy: "AVERAGE_RATING",
    language: "en",
  });

  const handleCategoryChange = (category: VideoCategory) => {
    setCategory(category);
  };

  return (
    <div>
      <Banner
        category={category ?? VideoCategory.ALL}
        setCategory={handleCategoryChange}
      />
      <div className="h-2 w-full bg-red-600" />
      {updatedAtData && updatedAtData.length > 0 && (
        <div className="space-y-8 px-4 sm:px-10 py-8">
          {updatedAtData && (
            <div>
              <Typography className="font-medium" variant="h6" gutterBottom>
                Latest
              </Typography>
              <MoviesSlides
                id="0"
                movies={formatMovies({
                  data: updatedAtData,
                })}
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
                movies={formatMovies({
                  data: last7DaysViewsData,
                })}
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
                movies={formatMovies({
                  data: last30DaysViewsData,
                })}
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
                movies={formatMovies({
                  data: totalViewsData,
                })}
              />
            </div>
          )}
          {TotalCommentAndReplyCountData && (
            <div>
              <Typography className="font-medium" variant="h6" gutterBottom>
                Total Comment And Reply Count
              </Typography>
              <MoviesSlides
                id="1"
                movies={formatMovies({
                  data: TotalCommentAndReplyCountData,
                })}
              />
            </div>
          )}
          {AverageRatingData && (
            <div>
              <Typography className="font-medium" variant="h6" gutterBottom>
                Average Rating
              </Typography>
              <MoviesSlides
                id="1"
                movies={formatMovies({
                  data: AverageRatingData,
                })}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
