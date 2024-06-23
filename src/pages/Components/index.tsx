import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import MovieCard from "../../components/MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import ReactPlayer from "react-player";
import MoviesSlides from "../../components/MoviesSlides";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const movie = {
  id: "Garfield",
  name: "Garfield",
  imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
  description:
    "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
  updatedAt: "2024-06-07",
};

export default function Components() {
  return (
    <div className="space-y-4 bg-slate-900 p-3">
      <h2 className="mt-0 text-amber-600">Typography</h2>
      <Typography variant="h6" gutterBottom>
        Logo Text
      </Typography>
      <Typography className="font-medium" variant="h2" gutterBottom>
        Banner Title
      </Typography>
      <Typography className="font-medium" variant="h5" gutterBottom>
        Banner Subtitle
      </Typography>
      <Typography className="font-medium" variant="h6" gutterBottom>
        Label
      </Typography>
      <Typography className="font-semibold" variant="subtitle1" gutterBottom>
        Movie Title
      </Typography>
      <Typography variant="body2">
        Copyright © Website {new Date().getFullYear()}.
      </Typography>
      <h2 className="text-amber-600">Button</h2>
      <Button
        className="border-white/60 text-white hover:border-white"
        variant="outlined"
      >
        Outlined
      </Button>
      <h2 className="text-amber-600">Card</h2>
      <MovieCard movie={movie} />
      <h2 className="text-amber-600">Input</h2>
      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search..." }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <h2 className="mt-0 text-amber-600">Player</h2>
      <ReactPlayer
        controls
        url="https://d3q62pnjbn74l6.cloudfront.net/Goodfellas.mp4"
      />
      <h2 className="mt-0 text-amber-600">Header</h2>
      <Header />
      <h2 className="mt-0 text-amber-600">Footer</h2>
      <Footer />
      <h2 className="mt-0 text-amber-600">Movie Swiper</h2>
      <MoviesSlides id="1" />
    </div>
  );
}
