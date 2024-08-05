import axios from "axios";
import { defaultData } from "./data";
import { CreateCrewPayload, CrewResponse } from "./model/crew";
import { CreateVideoPayload } from "./model/video";

const BACKEND_URL = "https://video-platform-api.tokenbricks-dev.com/api";

const instance = axios.create({
  baseURL: BACKEND_URL,
});

const createManyCrews = (payload: CreateCrewPayload[]) => {
  return instance.post<CrewResponse[]>("/v1/crews/bulk", {
    bulk: payload,
  });
};

const createVideo = (payload: CreateVideoPayload) => {
  return instance.post("/v1/videos", payload);
};

const getToken = () => {
  return instance.get("/v1/auth/google/signin/mock1");
};

export const createDefaultData = async () => {
  const token = (await getToken()).data.accessToken;
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  for (const data of defaultData) {
    const crewResponse = await createManyCrews(data.createCrewsPayload);
    const directorIds = crewResponse.data
      .filter((crew) => crew.roles.includes("DIRECTOR"))
      .map((crew) => crew.id);
    const writerIds = crewResponse.data
      .filter((crew) => crew.roles.includes("WRITER"))
      .map((crew) => crew.id);
    const castIds = crewResponse.data
      .filter((crew) => crew.roles.includes("CAST"))
      .map((crew) => crew.id);

    await createVideo({
      ...data.createVideoPayload,
      videoDirectorCrewIds: directorIds,
      videoWriterCrewIds: writerIds,
      videoCastCrewIds: castIds,
      videoSubtitles: [],
    });
  }

  alert('Default data created successfully');
};
