import {
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Rating,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useRef, useState } from "react";
import Message from "../../components/Message";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import {
  CommentsResponseData,
  VideoCategory,
  VideoData,
  VideoSubtitleData,
} from "../../model/movie";

import * as React from "react";
import useAuth from "../../services/auth/hooks/useAuth";
import { decryptData } from "../../utils/movie";
import { useNotificationStore } from "../../store/useNotificationStore";
import CloseIcon from "@mui/icons-material/Close";
import { useAuthStore } from "../../services/auth/store/useAuthStroe";
import { useMovieFavorite } from "../../hooks/useMovieFavorite";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Detail() {
  const { authAxios, isAuthenticated } = useAuth();

  const { userData } = useAuthStore();
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const { id } = useParams();
  const [value, setValue] = useState("Videos & Photos");
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();
  const [commentRating, setCommentRating] = React.useState<number | null>(0);
  const [subtitles, setSubtitles] = useState<
    {
      language: string;
      url: string;
    }[]
  >();

  const { isFavorite, handleTriggerFavorite } = useMovieFavorite(Number(id));

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

  useQuery(
    [
      "/api/v1/video-subtitles",
      id,
      "subtitles",
      movieRes?.data.supportedLanguages,
    ],
    async () => {
      if (!movieRes) {
        return;
      }
      console.log(
        "movieRes.data.supportedLanguages",
        movieRes.data.supportedLanguages,
      );
      return await axios.all(
        movieRes.data.supportedLanguages.map((language) => {
          return authAxios.get<VideoSubtitleData[]>(
            `/api/v1/videos/${id}/subtitles`,
            {
              headers: {
                "accept-language": language,
              },
            },
          );
        }),
      );
    },
    {
      onSuccess: async (data) => {
        if (!data) {
          return;
        }
        const filteredData = data.filter((item) => item.data.length > 0);
        if (filteredData.length === 0) {
          setSubtitles([]);
        }

        const encryptedSubtitles = await axios.all(
          filteredData.map((item) => {
            return axios.get(item.data[0]?.url, {
              responseType: "text",
            });
          }),
        );

        const decryptedSubtitles = await axios.all(
          encryptedSubtitles.map(async (item, index) => {
            if (!filteredData[index].data[0].videoSubtitleEncryption) {
              return {
                language: filteredData[index].data[0].languageCode,
                url: "",
              };
            }
            const decryptedData = await decryptData(
              filteredData[index].data[0].videoSubtitleEncryption.key,
              filteredData[index].data[0].videoSubtitleEncryption.iv,
              item.data,
            );
            const webVTTContent =
              "WEBVTT\n\n" + decryptedData.replace(/,/g, ".");
            const blob = new Blob([webVTTContent], { type: "text/vtt" });
            const url = URL.createObjectURL(blob);
            return {
              language: filteredData[index].data[0].languageCode,
              url: url,
            };
          }),
        );

        setSubtitles(decryptedSubtitles.filter((item) => !!item.url));
      },
      onError: (error) => {
        console.log("error", error);
      },
    },
  );

  const movieData = movieRes?.data;

  const { data: commentsRes } = useQuery(
    ["/api/v1/videos/${id}/comments", id],
    async () => {
      return authAxios.get<CommentsResponseData>(
        `/api/v1/videos/${id}/comments`,
      );
    },
  );
  const commentsData = commentsRes?.data;
  const isCommented = commentsData?.data.some(
    (comment) => comment.member.id === userData?.id,
  );
  // console.log("userData", userData);
  // console.log("commentsData", commentsData);

  const commentMutation = useMutation({
    mutationFn: async () => {
      return authAxios?.post(`/api/v1/videos/comments`, {
        videoId: Number(id),
        rating: commentRating,
        content: comment,
      });
    },
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries(["/api/v1/videos/${id}/comments"]);
    },
    onError: (error: { response: { data: { message: string } } }) => {
      console.log("error", error);
      showNotification(error.response.data.message, "error");
    },
  });

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const subtitleTracks = subtitles?.map((subtitle) => {
    const labels = {
      "zh-cn": "Chinese",
      "zh-tw": "Chinese",
      en: "English",
      ko: "Korean",
      ja: "Japanese",
    };
    return {
      kind: "subtitles",
      src: subtitle.url,
      srcLang: subtitle.language,
      default: true,
      label: labels[subtitle.language as keyof typeof labels],
    };
  });

  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.getElementById("root");
  }, []);

  return (
    <div>
      <Modal
        className="flex items-center justify-center bg-white/20"
        open={openCommentModal}
        onClose={() => {
          setOpenCommentModal(false);
        }}
        disablePortal
        container={rootRef.current}
      >
        <div
          className="relative w-[542px] overflow-hidden rounded-2xl bg-[#010305] px-4 py-4"
          style={{ boxShadow: "0px 20px 40px 0 rgba(0,0,0,0.2)" }}
        >
          <div className="flex justify-end">
            <IconButton
              size="small"
              aria-label="close"
              onClick={() => {
                setOpenCommentModal(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="m-0 text-2xl font-medium text-white">
                {movieData?.videoDetail.title}
              </p>
              <p className="m-0 text-center text-base font-medium text-white">
                How would you rate this movie?
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <Rating
                max={10}
                size="large"
                value={commentRating}
                onChange={(_, newValue) => {
                  setCommentRating(newValue);
                }}
              />
            </div>
            <div className="flex justify-center pb-4">
              <TextField
                className="mt-4 w-[360px]"
                label="Comment"
                multiline
                rows={4}
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <Button
              className="mx-auto mb-4 mt-2 w-fit rounded-full px-10"
              size="large"
              variant="contained"
              onClick={() => {
                commentMutation.mutate();
                setOpenCommentModal(false);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
      <div className="pt-[64px]">
        <div className="h-[56.25vw] max-h-[calc(100vh-169px)] min-h-[480px]">
          {subtitles && (
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url={movieData?.url ?? "error"}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                  },
                  tracks: subtitleTracks,
                },
              }}
            />
          )}
        </div>
        <div className="space-y-10 px-10 py-5">
          <div className="flex gap-16">
            <div className="w-full space-y-3">
              <div className="flex space-x-5">
                <Typography variant="h4">
                  {movieData?.videoDetail.title}
                </Typography>
                <IconButton
                  className="bg-gray-800"
                  onClick={handleTriggerFavorite}
                >
                  <FavoriteBorderIcon
                    className={isFavorite ? "text-red-500" : undefined}
                  />
                </IconButton>
                <IconButton
                  className="bg-gray-800"
                  onClick={() => {
                    if (!isAuthenticated) {
                      return showNotification("Please sign in to comment", "error");
                    }
                    if (!isCommented) setOpenCommentModal(true);
                  }}
                >
                  <StarBorderIcon
                    className={isCommented ? "text-yellow-500" : undefined}
                  />
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
                    <span className="inline text-gray-500">
                      (1k)
                    </span> &bull; {movieData?.totalViews} Views &bull; 1.2K
                    Comments
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
                          {index !== movieData.videoDirectors.length - 1 &&
                            ", "}
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
                    {movieData?.categories.map((item, index) => {
                      return (
                        <React.Fragment key={item}>
                          <Link
                            className="text-[#7EC2F9] no-underline"
                            to={`/search/movies?category=${item}`}
                          >
                            {item.toLocaleLowerCase()}
                          </Link>
                          {index !== movieData.categories.length - 1 && ", "}
                        </React.Fragment>
                      );
                    })}
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
                  <Typography variant="body2">
                    {movieData?.supportedLanguages.map((item, index) => {
                      let title = "";
                      switch (item) {
                        case "zh-cn":
                        case "zh-tw":
                          title = "Chinese";
                          break;
                        case "en":
                          title = "English";
                          break;
                        case "ko":
                          title = "Korean";
                          break;
                        case "ja":
                          title = "Japanese";
                          break;
                        default:
                          title = item;
                          break;
                      }
                      return (
                        <React.Fragment key={item}>
                          <Link
                            className="text-[#7EC2F9] no-underline"
                            to={`/search/movies?lang=${item}`}
                          >
                            {title}
                          </Link>
                          {index !== movieData.supportedLanguages.length - 1 &&
                            ", "}
                        </React.Fragment>
                      );
                    })}
                  </Typography>
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
                    {movieData?.videoAttachments.map((attachment) => {
                      return (
                        <div key={attachment.id} className="aspect-video">
                          <img
                            className="h-full w-full object-cover"
                            src={attachment.url}
                            alt="video image"
                          />
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel className="px-0" value="Comments">
                  {!isCommented && (
                    <Button
                      className="mb-4 rounded-full normal-case"
                      variant="contained"
                      startIcon={<EditIcon />}
                      onClick={() => {
                        if (!isAuthenticated) {
                          return showNotification("Please sign in to comment", "error");
                        }
                        setOpenCommentModal(true);
                      }}
                    >
                      Write a review
                    </Button>
                  )}

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
                <TabPanel className="px-0" value="More like this"></TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
