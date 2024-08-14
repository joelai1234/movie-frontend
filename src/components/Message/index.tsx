import { IconButton, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StarIcon from "@mui/icons-material/Star";
import { useMutation, useQueryClient } from "react-query";
import useAuth from "../../services/auth/hooks/useAuth";
import { VideoCommentReactionType } from "../../model/movie";
import { useNotificationStore } from "../../store/useNotificationStore";

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
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );
  const { authAxios, isAuthenticated } = useAuth();

  const queryClient = useQueryClient();

  const reactionMutation = useMutation({
    mutationFn: async (type: VideoCommentReactionType) => {
      return authAxios?.post(`/api/v1/videos/comments/reactions`, {
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
      showNotification(message, "error");
    },
  });

  const deleteReactionMutation = useMutation({
    mutationFn: async () => {
      return authAxios?.delete(`api/v1/videos/comments/${id}/reactions`);
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
      showNotification(message, "error");
    },
  });

  const handleLike = () => {
    if (!isAuthenticated)
      return showNotification("Please login to like", "error");
    if (reaction === VideoCommentReactionType.LIKE) {
      deleteReactionMutation.mutate();
    } else {
      reactionMutation.mutate(VideoCommentReactionType.LIKE);
    }
  };

  const handleDislike = () => {
    if (!isAuthenticated)
      return showNotification("Please login to dislike", "error");
    if (reaction === VideoCommentReactionType.DISLIKE) {
      deleteReactionMutation.mutate();
    } else {
      reactionMutation.mutate(VideoCommentReactionType.DISLIKE);
    }
  };

  return (
    <div className="flex gap-4 sm:gap-8">
      <div className="size-10 shrink-0 rounded-full bg-slate-50" />
      <div className="flex-1 shrink-0 sm:max-w-[582px]">
        <div className="flex items-center justify-between">
          <Typography variant="body2">{name}</Typography>
          <div className="flex items-center">
            <Typography variant="body2">
              {new Date(date).toLocaleString()}
            </Typography>
            <StarIcon className="ml-2 mr-1 text-yellow-500" fontSize="small" />
            <Typography variant="body2">{rating}</Typography>
          </div>
        </div>
        <div className="mt-1">
          <Typography variant="body2">{message}</Typography>
        </div>
      </div>
      <div className="flex h-fit items-center gap-1">
        <IconButton
          className="h-fit p-0"
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
          className="h-fit p-0"
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
