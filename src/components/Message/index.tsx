import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StarIcon from "@mui/icons-material/Star";
import { useMutation, useQueryClient } from "react-query";
import useAuth from "../../services/auth/hooks/useAuth";
import { VideoCommentReactionType } from "../../model/movie";
import { useState } from "react";

interface MessageProps {
  id: number;
  name: string;
  date: string;
  rating: number;
  message: string;
  likes: number;
  dislikes: number;
  reaction?: string;
}

export default function Message({
  id,
  name,
  date,
  rating,
  message,
  likes,
  dislikes,
  reaction,
}: MessageProps) {
  const { authAxios } = useAuth();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleErrorMessage = (message: string) => {
    setOpen(true);
    setErrorMessage(message);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const queryClient = useQueryClient();

  const reactionMutation = useMutation({
    mutationFn: async (type: VideoCommentReactionType) => {
      return authAxios.post(`/api/v1/videos/comments/reactions`, {
        videoCommentId: id,
        reactionType: type,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/api/v1/videos/${id}/comments");
    },
    onError: (error) => {
      const message = (
        error as {
          response: {
            data: {
              message: string;
            };
          };
        }
      ).response.data.message;
      handleErrorMessage(message);
    },
  });

  const deleteReactionMutation = useMutation({
    mutationFn: async () => {
      return authAxios.delete(`api/v1/videos/comments/${id}/reactions`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("/api/v1/videos/${id}/comments");
    },
    onError: (error) => {
      const message = (
        error as {
          response: {
            data: {
              message: string;
            };
          };
        }
      ).response.data.message;
      handleErrorMessage(message);
    },
  });

  const handleLike = () => {
    if (reaction === VideoCommentReactionType.LIKE) {
      deleteReactionMutation.mutate();
    } else {
      reactionMutation.mutate(VideoCommentReactionType.LIKE);
    }
  };

  const handleDislike = () => {
    if (reaction === VideoCommentReactionType.DISLIKE) {
      deleteReactionMutation.mutate();
    } else {
      reactionMutation.mutate(VideoCommentReactionType.DISLIKE);
    }
  };

  return (
    <div className="flex gap-8">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <div className="h-10 w-10 rounded-full bg-slate-50" />
      <div className="w-[582px] space-y-2">
        <div className="flex items-center justify-between py-1">
          <Typography variant="body2">{name}</Typography>
          <div className="flex items-center">
            <Typography variant="body2">
              {new Date(date).toLocaleString()}
            </Typography>
            <StarIcon className="ml-2 mr-1 text-yellow-500" fontSize="small" />
            <Typography variant="body2">{rating}</Typography>
          </div>
        </div>
        <div>
          <Typography variant="body2">{message}</Typography>
        </div>
      </div>
      <div className="flex h-fit items-center gap-1">
        <IconButton
          className="h-fit"
          size="small"
          onClick={() => {
            handleLike();
          }}
        >
          <ThumbUpOffAltIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2">{likes}</Typography>
      </div>
      <div className="flex h-fit items-center gap-1">
        <IconButton
          className="h-fit"
          size="small"
          onClick={() => {
            handleDislike();
          }}
        >
          <ThumbDownOffAltIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2">{dislikes}</Typography>
      </div>
      {/* <div>
        <Button
          className="rounded-full normal-case text-white"
          size="small"
          variant="text"
        >
          Replay
        </Button>
      </div> */}
    </div>
  );
}
