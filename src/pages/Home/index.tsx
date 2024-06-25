import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import Banner from "../../components/Banner";
import { movies } from "../../data/movies";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-2 w-full bg-red-600" />
      <div className="space-y-8 px-2 py-8">
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Binge-Worthy Shows
          </Typography>
          <MoviesSlides id="1" movies={movies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Crime-Time
          </Typography>
          <MoviesSlides id="2" movies={movies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Leaving Soon
          </Typography>
          <MoviesSlides id="3" movies={movies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Based On a True Story
          </Typography>
          <MoviesSlides id="4" movies={movies} />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            We Are Proud
          </Typography>
          <MoviesSlides id="5" movies={movies} />
        </div>
      </div>
    </div>
  );
}
