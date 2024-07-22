import { Box, Chip, IconButton, Paper, Tab, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Message from "../../components/Message";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  CommentsResponseData,
  VideoCategory,
  VideoData,
} from "../../model/movie";

import * as React from "react";
import InputBase from "@mui/material/InputBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useAuth from "../../services/auth/hooks/useAuth";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Detail() {
  const { authAxios } = useAuth();
  const { id } = useParams();
  const [value, setValue] = useState("Videos & Photos");
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const { data: movieRes } = useQuery(["/api/v1/videos", id], async () => {
    return axios.get<VideoData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/videos/${id}`,
      {
        headers: {
          "accept-language": "en",
        },
      },
    );
  });
  const movieData = movieRes?.data;
  console.log(movieRes);

  const { data: commentsRes } = useQuery(
    ["/api/v1/videos/${id}/comments"],
    async () => {
      return authAxios.get<CommentsResponseData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/${id}/comments`,
      );
    },
  );
  const commentsData = commentsRes?.data;
  console.log(commentsData);

  const commentMutation = useMutation({
    mutationFn: async () => {
      return authAxios.post(`/api/v1/videos/comments`, {
        videoId: Number(id),
        rating: 10,
        content: comment,
      });
    },
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries(["/api/v1/videos/${id}/comments"]);
    },
  });

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <div className="pt-[64px]">
        <div className="h-[56.25vw] max-h-[calc(100vh-169px)] min-h-[480px]">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={movieData?.fileName}
            // url="https://d3q62pnjbn74l6.cloudfront.net/Goodfellas.mp4"
            // url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            // url="https://hn.bfvvs.com/play/QbYKvLYe/index.m3u8"
          />
        </div>
        <div className="space-y-10 px-10 py-5">
          <div className="flex gap-16">
            <div className="w-full space-y-3">
              <div className="flex space-x-5">
                <Typography variant="h4">
                  {movieData?.videoDetail.title}
                </Typography>
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
                    {movieData?.releaseYear} &bull; {movieData?.rating} &bull;
                    1h 35m
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
                    &bull; {movieData?.totalViews} Views &bull; 1.2K Comments
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="body2">
                  {movieData?.videoDetail.description}
                </Typography>
              </div>
              <div className="space-x-4">
                {movieData?.categories
                  .filter((item) => item !== VideoCategory.ALL)
                  .map((category) => (
                    <Chip
                      className="capitalize"
                      key={category}
                      label={category.toLocaleLowerCase()}
                      variant="outlined"
                    />
                  ))}
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
                  <Typography variant="body2">
                    {movieData?.videoDirectors.map((item, index) => {
                      return (
                        <React.Fragment key={item.id}>
                        <Link
                          className="text-[#7EC2F9] no-underline"
                          to={`/cast/${item.crewId}`}
                        >
                          {item.crew.name}
                        </Link>
                        {index !== movieData.videoDirectors.length - 1 && ", "}
                      </React.Fragment>
                      );
                    })}
                  </Typography>
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
                    {movieData?.videoCasts.map((item, index) => {
                      return (
                        <React.Fragment key={item.id}>
                          <Link
                            className="text-[#7EC2F9] no-underline"
                            to={`/cast/${item.crewId}`}
                          >
                            {item.crew.name}
                          </Link>
                          {index !== movieData.videoCasts.length - 1 && ", "}
                        </React.Fragment>
                      );
                    })}
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
                  <Typography className="capitalize" variant="body2">
                    {movieData?.categories
                      .filter((item) => item !== VideoCategory.ALL)
                      .join(", ")
                      .toLocaleLowerCase()}
                  </Typography>
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
                    <div className="aspect-video">
                      <img
                        className="h-full w-full object-cover"
                        src={movieData?.coverPictureUrl}
                        alt="video image"
                      />
                    </div>
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
                  <Paper
                    className="mb-4 rounded-full"
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                      <AccountCircleIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Replay"
                      inputProps={{ "aria-label": "replay" }}
                      value={comment}
                      onChange={handleCommentChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          commentMutation.mutate();
                        }
                      }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                      onClick={() => {
                        commentMutation.mutate();
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Paper>

                  <div className="space-y-10">
                    {commentsData?.data.map((comment) => {
                      return (
                        <Message
                          key={comment.id}
                          id={comment.id}
                          name={comment.member.name}
                          date={comment.createdAt}
                          rating={comment.rating}
                          message={comment.content}
                          likes={comment.reactionLikeCount}
                          dislikes={comment.reactionDislikeCount}
                          reaction={
                            comment.videoCommentReactions?.[0]?.reactionType
                          }
                        />
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel className="px-0" value="More like this">
                  {/* <div className="flex flex-wrap gap-4">
                    {mockMovies.map((movie) => {
                      return <MovieCard key={movie.id} movie={movie} />;
                    })}
                  </div> */}
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
