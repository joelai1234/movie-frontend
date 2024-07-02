import { Box, Chip, IconButton, Tab, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { movies as mockMovies } from "../../data/movies";
import MovieCard from "../../components/MovieCard";
import Message from "../../components/Message";
export default function Detail() {
  const [value, setValue] = useState("Videos & Photos");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="pt-[64px]">
        <div className="h-[56.25vw] max-h-[calc(100vh-169px)] min-h-[480px]">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url="https://d3q62pnjbn74l6.cloudfront.net/Goodfellas.mp4"
          />
        </div>
        <div className="space-y-10 px-10 py-5">
          <div className="flex gap-16">
            <div className="w-full space-y-3">
              <div className="flex space-x-5">
                <Typography variant="h4">Goodfellas</Typography>
                <IconButton className="bg-gray-800">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton className="bg-gray-800">
                  <StarBorderIcon />
                </IconButton>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>
                  <Typography variant="body1">
                    1989 &bull; PG &bull; 1h 35m
                  </Typography>
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon fontSize="small" className="text-yellow-500" />
                  <Typography variant="body2">
                    8.1
                    <Typography
                      className="inline text-gray-500"
                      variant="body2"
                    >
                      (1k)
                    </Typography>{" "}
                    &bull; 2.1k Views &bull; 1.2K Comments
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="body2">
                  The beloved characters Gru and Lucy and their adorable
                  daughters Maomao, Didi, and An An are about to start a new
                  chapter in their family life, welcoming a new...
                </Typography>
              </div>
              <div className="space-x-4">
                <Chip label="Animation" variant="outlined" />
                <Chip label="Adventure" variant="outlined" />
                <Chip label="Comedy" variant="outlined" />
              </div>
            </div>
            <div className="w-80 shrink-0 space-y-4">
              <div className="flex">
                <div className="w-20 shrink-0">
                  <Typography className="text-gray-500" variant="body2">
                    Directors
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">Pete Docter</Typography>
                </div>
              </div>
              <div className="flex">
                <div className="w-20 shrink-0">
                  <Typography className="text-gray-500" variant="body2">
                    Cast
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis
                    Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, Kyle
                    Maclachlan
                  </Typography>
                </div>
              </div>
              <div className="flex">
                <div className="w-20 shrink-0">
                  <Typography className="text-gray-500" variant="body2">
                    Category
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">Animation, Family</Typography>
                </div>
              </div>
              <div className="flex">
                <div className="w-20 shrink-0">
                  <Typography className="text-gray-500" variant="body2">
                    Subtitle
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">Chinese, English</Typography>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      className="normal-case"
                      label="Videos & Photos"
                      value="Videos & Photos"
                    />
                    <Tab
                      className="normal-case"
                      label="Comments"
                      value="Comments"
                    />
                    <Tab
                      className="normal-case"
                      label="More like this"
                      value="More like this"
                    />
                  </TabList>
                </Box>
                <TabPanel className="px-0" value="Videos & Photos">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                    <div className="aspect-video bg-slate-700"></div>
                  </div>
                </TabPanel>
                <TabPanel className="px-0" value="Comments">
                  <div className="space-y-10">
                    <Message />
                    <Message />
                    <Message />
                    <Message />
                  </div>
                </TabPanel>
                <TabPanel className="px-0" value="More like this">
                  <div className="flex flex-wrap gap-4">
                    {mockMovies.map((movie) => {
                      return <MovieCard key={movie.id} movie={movie} />;
                    })}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
