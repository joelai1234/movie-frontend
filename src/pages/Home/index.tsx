import { Typography } from "@mui/material";
import MoviesSlides from "../../components/MoviesSlides";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-2 w-full bg-red-600"  />
      <div className="space-y-8 py-8 px-2">
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Binge-Worthy Shows
          </Typography>
          <MoviesSlides id="1" />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Crime-Time
          </Typography>
          <MoviesSlides id="2" />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Leaving Soon
          </Typography>
          <MoviesSlides id="3" />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Based On a True Story
          </Typography>
          <MoviesSlides id="4" />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            We Are Proud
          </Typography>
          <MoviesSlides id="5" />
        </div>
      </div>
    </div>
  );
}
