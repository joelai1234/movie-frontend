import axios from "axios";
import { CreateVideoPayload } from "./model/video";

const BACKEND_URL = "https://video-platform-api.tokenbricks-dev.com/api";

export const CreateVideo = (payload: CreateVideoPayload) => {
  return axios.post(`${BACKEND_URL}/v1/videos`, payload);
};
