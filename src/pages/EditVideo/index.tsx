import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../../services/auth/hooks/useAuth";
import {
  categoryList,
  ratingList,
  videoSourceTypeOptions,
} from "../../data/movies";
import {
  MoviePayload,
  RolesData,
  VideoCategory,
  VideoData,
  VideoRating,
} from "../../model/movie";
import ReactPlayer from "react-player";
import axios from "axios";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

type Inputs = {
  title: string;
  description: string;
  url: string;
  subtitles: {
    en: boolean;
    "zh-cn": boolean;
    ko: boolean;
    ja: boolean;
  };
};

export default function EditVideo() {
  const { id } = useParams();
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [rating, setRating] = useState<string>(VideoRating.G);
  const [sourceType, setSourceType] = useState<"FILE" | "URL">("FILE");
  const navigate = useNavigate();
  const [uploadedVideoRes, setUploadedVideoRes] = useState<{
    fileName: string;
    url: string;
  } | null>(null);
  const [uploadedThumbnailRes, setUploadedThumbnailRes] = useState<
    {
      fileName: string;
      url: string;
    }[]
  >([]);
  const { authAxios } = useAuth();
  const [search, setSearch] = useState("");

  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [directors, setDirectors] = useState<{ id?: number; name: string }[]>(
    [],
  );
  const [releaseYear, setReleaseYear] = useState(dayjs());
  const [writers, setWriters] = useState<{ id?: number; name: string }[]>([]);
  const [casts, setCasts] = useState<{ id?: number; name: string }[]>([]);

  const { data: movieRes } = useQuery(
    ["/api/v1/videos", id],
    async () => {
      return authAxios?.get<VideoData>(
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
        setUploadedVideoRes({
          fileName: data.data.fileName,
          url: data.data.url,
        });
        setCategory(data.data.categories);
        setRating(data.data.rating);

        setDirectors(
          data.data.videoDirectors.map((item) => {
            return {
              id: item.crewId,
              name: item.crew.name,
            };
          }),
        );
        setWriters(
          data.data.videoWriters.map((item) => {
            return {
              id: item.crewId,
              name: item.crew.name,
            };
          }),
        );
        setCasts(
          data.data.videoCasts.map((item) => {
            return {
              id: item.crewId,
              name: item.crew.name,
            };
          }),
        );
        setUploadedThumbnailRes(
          data.data.videoAttachments.map((item) => ({
            fileName: "",
            url: item.url,
          })),
        );
        setReleaseYear(dayjs(`${data.data.releaseYear}-01-01`));
      },
    },
  );

  const { data: crewsResData } = useQuery(
    ["/api/v1/crews", search],
    async () => {
      return axios.get<{ data: RolesData[] }>(
        VITE_BACKEND_API_BASE_URL + `/api/v1/crews`,
        {
          params: {
            keyword: search,
          },
        },
      );
    },
    {
      enabled: search.length > 0,
    },
  );

  const crewsData =
    crewsResData?.data.data.sort((a, b) => a.name.localeCompare(b.name)) ?? [];

  const uploadVideoMutation = useMutation(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return authAxios?.post("api/v1/videos/upload", formData);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setUploadedVideoRes(data.data);
      },
    },
  );
  const uploadThumbnailMutation = useMutation(
    (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      return authAxios?.post("/api/v1/videos/pictures/upload", formData);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setUploadedThumbnailRes((prev) => [...prev, data.data]);
      },
    },
  );

  const updateVideoMutation = useMutation(
    async ({ title, description, url }: Inputs) => {
      const videoDirectorCrewIds: number[] = [];
      const videoWriterCrewIds: number[] = [];
      const videoCastCrewIds: number[] = [];

      const crewsPayload: { name: string; roles: string[]; website: [] }[] = [];

      directors.forEach((director) => {
        if (director.id) {
          videoDirectorCrewIds.push(director.id);
          return;
        } else {
          crewsPayload.push({
            name: director.name,
            roles: ["DIRECTOR"],
            website: [],
          });
        }
      });
      writers.forEach((writer) => {
        if (writer.id) {
          videoWriterCrewIds.push(writer.id);
          return;
        } else {
          crewsPayload.push({
            name: writer.name,
            roles: ["WRITER"],
            website: [],
          });
        }
      });
      casts.forEach((cast) => {
        if (cast.id) {
          videoCastCrewIds.push(cast.id);
          return;
        } else {
          crewsPayload.push({
            name: cast.name,
            roles: ["CAST"],
            website: [],
          });
        }
      });

      if (crewsPayload.length > 0) {
        const crewsRes = await authAxios?.post("/api/v1/crews/bulk", {
          bulk: crewsPayload,
        });
        crewsRes.data.forEach((crew: { id: number; roles: string[] }) => {
          if (crew.roles.includes("DIRECTOR")) {
            videoDirectorCrewIds.push(crew.id);
          }
          if (crew.roles.includes("WRITER")) {
            videoWriterCrewIds.push(crew.id);
          }
          if (crew.roles.includes("CAST")) {
            videoCastCrewIds.push(crew.id);
          }
        });
      }

      const payload: MoviePayload = {
        name: title,
        sourceType: sourceType,
        source: sourceType === "FILE" ? uploadedVideoRes?.url ?? "" : url,
        coverPictureUrl: uploadedThumbnailRes?.[0]?.url ?? "",
        categories: category,
        rating: rating,
        releaseYear: releaseYear.year(),
        videoDetails: [
          {
            id: movieRes?.data.videoDetail.id,
            languageCode: "en",
            title: title,
            description: description,
          },
        ],
        videoAttachments: uploadedThumbnailRes.map((thumbnail, index) => {
          return {
            type: "PICTURE",
            url: thumbnail?.url,
            order: index,
          };
        }),
        videoSubtitles: [],
        videoTags: tags.map((tag) => ({
          type: "normal",
          value: tag,
        })),
        videoDirectorCrewIds,
        videoWriterCrewIds,
        videoCastCrewIds,
      };
      return authAxios?.put(`/api/v1/videos/${id}`, payload);
    },
    {
      onSuccess: (data) => {
        console.log(data);
        navigate("/profile");
      },
    },
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    // console.log(
    //   transformLanguageObject(data.subtitles, data.title, data.description),
    // );
    updateVideoMutation.mutate(data);
  };

  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex-1 space-y-8 overflow-auto p-8">
        <div>
          <Typography variant="h6" gutterBottom>
            Video
          </Typography>
          <div className="flex flex-col space-y-4">
            <FormControl fullWidth>
              <InputLabel id="source-type-label">Video source type</InputLabel>
              <Select
                className="w-full"
                label="Video source type"
                labelId="source-type-label"
                value={sourceType}
                onChange={(e) => {
                  setSourceType(e.target.value as "FILE" | "URL");
                }}
              >
                {videoSourceTypeOptions.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {sourceType === "FILE" && (
              <div className="flex flex-col gap-2">
                <div className="w-36 rounded-md border border-indigo-500 bg-gray-800 p-4 shadow-md">
                  <label
                    htmlFor="upload-video"
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
                    <span className="font-medium text-white">Upload video</span>
                  </label>
                  <input
                    id="upload-video"
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
                </div>
                {uploadedVideoRes && (
                  <ReactPlayer
                    width="400px"
                    height="250px"
                    controls
                    url={uploadedVideoRes.url}
                  />
                )}
              </div>
            )}
            {sourceType === "URL" && (
              <TextField
                label="Video URL"
                variant="outlined"
                {...register("url")}
              />
            )}
          </div>
        </div>
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
            Category
          </Typography>
          <Select
            className="w-full"
            placeholder="Select category"
            labelId="category"
            multiple
            value={category}
            onChange={(e) => {
              const {
                target: { value },
              } = e;
              setCategory(typeof value === "string" ? value.split(",") : value);
            }}
            input={<OutlinedInput />}
          >
            {categoryList
              .filter((item) => item.value !== VideoCategory.ALL)
              .map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Rating
          </Typography>
          <Select
            className="w-full"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value as string);
            }}
            input={<OutlinedInput />}
          >
            {ratingList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Release Year
          </Typography>
          <DatePicker
            views={["year"]}
            value={releaseYear}
            onChange={(date) => {
              if (date) setReleaseYear(date);
            }}
          />
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Tags
          </Typography>
          <Autocomplete
            style={{ margin: "10px 0" }}
            multiple
            options={tags}
            value={tags}
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
        <div>
          <Typography variant="h6" gutterBottom>
            Directors
          </Typography>
          <Autocomplete
            style={{ margin: "10px 0" }}
            multiple
            value={directors}
            options={[
              ...directors,
              ...crewsData.filter((item) => {
                return item.roles.includes("DIRECTOR");
              }),
            ]}
            isOptionEqualToValue={(value, option) => {
              if (option.id === undefined && typeof value === "string") {
                return option.name == value;
              } else {
                return option.id === value.id;
              }
            }}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              } else {
                return option.name;
              }
            }}
            freeSolo
            onChange={(_, newValue) => {
              setDirectors(
                newValue.map((item) => {
                  if (typeof item === "string") {
                    return {
                      name: item,
                    };
                  } else {
                    return {
                      id: item.id,
                      name: item.name,
                    };
                  }
                }),
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                onFocus={() => {
                  setSearch("");
                }}
                placeholder="Add directors"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Writers
          </Typography>
          <Autocomplete
            style={{ margin: "10px 0" }}
            multiple
            freeSolo
            value={writers}
            options={[
              ...writers,
              ...crewsData.filter((item) => {
                return item.roles.includes("WRITER");
              }),
            ]}
            isOptionEqualToValue={(value, option) => {
              if (option.id === undefined && typeof value === "string") {
                return option.name == value;
              } else {
                return option.id === value.id;
              }
            }}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              } else {
                return option.name;
              }
            }}
            onChange={(_, newValue) => {
              setWriters(
                newValue.map((item) => {
                  if (typeof item === "string") {
                    return {
                      name: item,
                    };
                  } else {
                    return {
                      id: item.id,
                      name: item.name,
                    };
                  }
                }),
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                onFocus={() => {
                  setSearch("");
                }}
                placeholder="Add writers"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Casts
          </Typography>
          <Autocomplete
            style={{ margin: "10px 0" }}
            multiple
            freeSolo
            value={casts}
            options={[
              ...casts,
              ...crewsData.filter((item) => {
                return item.roles.includes("CAST");
              }),
            ]}
            isOptionEqualToValue={(value, option) => {
              if (option.id === undefined && typeof value === "string") {
                return option.name == value;
              } else {
                return option.id === value.id;
              }
            }}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              } else {
                return option.name;
              }
            }}
            onChange={(_, newValue) => {
              setCasts(
                newValue.map((item) => {
                  if (typeof item === "string") {
                    return {
                      name: item,
                    };
                  } else {
                    return {
                      id: item.id,
                      name: item.name,
                    };
                  }
                }),
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                onFocus={() => {
                  setSearch("");
                }}
                placeholder="Add casts"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            Thumbnail
          </Typography>
          <div className="flex flex-wrap gap-4">
            <div>
              {uploadedThumbnailRes.map((thumbnail) => (
                <img
                  className="aspect-video w-36 object-contain object-center"
                  key={thumbnail.url}
                  src={thumbnail.url}
                  alt="Thumbnail image"
                />
              ))}
            </div>
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
        </div>
      </div>
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
