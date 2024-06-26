import axios from "axios";
import { useMutation } from "react-query";
import { useUserDataStore } from "../../store/useUserDataStore";
import { useState } from "react";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

type Inputs = {
  title: string;
  description: string;
  thumbnail: File;
};

export default function UploadVideo() {
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();
  const [uploadedVideoFileName, setUploadedVideoFileName] = useState<
    string | null
  >(null);
  const [uploadedThumbnailFileName, setUploadedThumbnailFileName] = useState<
    string | null
  >(null);
  const { userData } = useUserDataStore();

  const { register, handleSubmit } = useForm<Inputs>();

  const uploadVideoMutation = useMutation(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return axios.post(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userData?.accessToken}`,
          },
        },
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setUploadedVideoFileName(data.data.fileName);
      },
    },
  );
  console.log(uploadVideoMutation.status);
  const uploadThumbnailMutation = useMutation(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return axios.post(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos/pictures/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${userData?.accessToken}`,
          },
        },
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setUploadedThumbnailFileName(data.data.fileName);
      },
    },
  );

  const createVideoMutation = useMutation(
    ({ title, description }: { title: string; description: string }) => {
      return axios.post(
        VITE_BACKEND_API_BASE_URL + `/api/v1/videos`,
        {
          name: title,
          fileName: uploadedVideoFileName,
          coverPictureUrl: uploadedThumbnailFileName,
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
        {
          headers: {
            Authorization: `Bearer ${userData?.accessToken}`,
          },
        },
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        navigate("/profile");
      },
    },
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createVideoMutation.mutate(data);
  };

  if (uploadVideoMutation.status !== 'idle') {
    return (
      <form className="flex h-full flex-col" onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="w-full flex-1 space-y-8 overflow-auto p-8">
          <div>
            <Typography variant="h6" gutterBottom>
              Details
            </Typography>
            <div className="flex flex-col space-y-4">
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                {...register("title")}
              />
              <TextField
                id="description"
                label="Description"
                multiline
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
                // console.log(e);
                // console.log(newValue);
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
          {uploadVideoMutation.isLoading && (
            <LinearProgress className="h-[2px]" />
          )}
          <div className="flex items-center p-4">
            <div>
              <Typography className="opacity-50" variant="body2">
                {uploadVideoMutation.isLoading
                  ? "Uploading video, please wait."
                  : "Video upload successful."}
              </Typography>
            </div>
            <Button
              className="ml-auto rounded-full px-6"
              variant="contained"
              type="submit"
              disabled={uploadVideoMutation.isLoading}
            >
              Confirm
            </Button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="flex h-full p-8">
      <div className="flex h-full w-full">
        <label
          htmlFor="video"
          className="dark:hover:bg-bray-800 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-32 w-32 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MP4, WMV, MOV or AVCHD (MAX. 800x400px)
            </p>
          </div>
          <input
            id="video"
            type="file"
            className="hidden"
            onChange={(event) => {
              const { files } = event.target;
              const selectedFiles = files as FileList;
              if (selectedFiles.length > 0) {
                uploadVideoMutation.mutate(selectedFiles[0]);
              } else {
                console.error("No file selected");
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}
