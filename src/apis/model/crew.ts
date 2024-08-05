export interface CrewResponse {
  id: number;
  name: string;
  roles: ("DIRECTOR" | "WRITER" | "CAST")[];
  introduction: string;
  pictureUrl: string;
  born: string;
  education: string;
  nickname: string;
  spouse: string;
  websites: {
    name: string;
    url: string;
  }[];
  totalViews: number;
}

export type CreateCrewPayload = Omit<CrewResponse, "id" | "totalViews">;