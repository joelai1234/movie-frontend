import axios from "axios";
import { CreateCrewPayload, CrewResponse } from "./model/crew";

const BACKEND_URL = "https://video-platform-api.tokenbricks-dev.com/api";

export const CreateCrew = (payload: CreateCrewPayload) => {
  return axios.post<CrewResponse>(`${BACKEND_URL}/v1/crews`, payload);
};

export const CreateManyCrews = (payload: CreateCrewPayload[]) => {
  return axios.post<CrewResponse[]>(`${BACKEND_URL}/v1/crews/bulk`, {
    bulk: payload,
  });
};
