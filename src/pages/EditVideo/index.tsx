import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { VideoData } from "../../model/movie";
import useAuth from "../../services/auth/hooks/useAuth";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

type Inputs = {
  title: string;
  description: string;
  thumbnail: File;
};

export default function EditVideo() {
  const { id } = useParams();
  console.log(id);
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const [uploadedThumbnailRes, setUploadedThumbnailRes] = useState<{
    fileName: string;
    url: string;
  } | null>(null);
  const { authAxios } = useAuth();

  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const { data } = useQuery(
    ["/api/v1/videos", id],
    async () => {
      return axios.get<VideoData>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/${id}`,
        {
          headers: {
            "accept-language": "en",
          },
        },
      );
    },
    {
      onSuccess: (data) => {
        setValue("title", data.data.name);
        setValue("description", data.data.videoDetail.description);
        if (data.data.videoTags)
          setTags(data.data.videoTags.map((tag) => tag.value));
      },
    },
  );
  console.log(data);

  const uploadThumbnailMutation = useMutation(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return authAxios.post(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/pictures/upload`,
        formData,
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setUploadedThumbnailRes(data.data);
      },
    },
  );

  const updateVideoMutation = useMutation(
    ({ title, description }: { title: string; description: string }) => {
      return authAxios.patch(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/${id}`,
        {
          name: title,
          coverPictureUrl:
            uploadedThumbnailRes?.url || data?.data.coverPictureUrl,
          videoDetails: [
            {
              languageCode: "en",
              title: title,
              description: description,
            },
          ],
          videoSubtitles: [],
          videoTags: tags.map((tag) => ({
            type: "normal",
            value: tag,
          })),
        },
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        navigate("/videos");
      },
    },
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateVideoMutation.mutate(data);
  };

  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormControl className="w-full flex-1 space-y-8 overflow-auto p-8">
        <div>
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
          <div className="flex flex-col space-y-4">
            <TextField
              label="Title"
              variant="outlined"
              focused
              {...register("title")}
            />
            <TextField
              label="Description"
              multiline
              focused
              rows={4}
              {...register("description")}
            />
          </div>
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Tags
          </Typography>
          <Autocomplete
            style={{ margin: "10px 0" }}
            multiple
            options={tags}
            defaultValue={[...tags]}
            freeSolo
            autoSelect
            onChange={(_, newValue) => {
              setTags(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Add tags" value={tags} />
            )}
          />
        </div>
        <div className="space-y-2">
          <Typography variant="h6" gutterBottom>
            Subtitles
          </Typography>
          <Typography variant="body1" gutterBottom>
            Select translation language
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Chinese" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="English"
            />
            <FormControlLabel control={<Checkbox />} label="Japanese" />
            <FormControlLabel control={<Checkbox />} label="Korean" />
            <FormControlLabel control={<Checkbox />} label="Thai" />
          </FormGroup>
          <Typography variant="body1" gutterBottom>
            Upload custom language subtitles
          </Typography>
          <div className="w-36 rounded-md border border-indigo-500 bg-gray-800 p-4 shadow-md">
            <label
              htmlFor="upload"
              className="flex cursor-pointer flex-col items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-gray-800 stroke-indigo-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-medium text-white">Upload subtitle</span>
            </label>
            <input id="upload" type="file" className="hidden" />
          </div>
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Thumbnail
          </Typography>
          <div className="w-36 rounded-md border border-indigo-500 bg-gray-800 p-4 shadow-md">
            <label
              htmlFor="thumbnail"
              className="flex cursor-pointer flex-col items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 fill-gray-800 stroke-indigo-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-medium text-white">Upload image</span>
            </label>
            <input
              id="thumbnail"
              type="file"
              className="hidden"
              onChange={(event) => {
                const { files } = event.target;
                const selectedFiles = files as FileList;
                if (selectedFiles.length > 0) {
                  uploadThumbnailMutation.mutate(selectedFiles[0]);
                } else {
                  console.error("No file selected");
                }
              }}
            />
          </div>
        </div>
      </FormControl>
      <div className="border-0 border-t border-solid border-white/20">
        <div className="flex items-center p-4">
          <Button
            className="ml-auto rounded-full px-6"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}
