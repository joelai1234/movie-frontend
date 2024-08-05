export interface CreateVideoPayload {
    sourceType: "FILE" | "URL";
    source: string;
    coverPictureUrl: string;
    name: string;
    releaseYear: number;
    duration: number;
    categories: (
      | "ACTION"
      | "ADVENTURE"
      | "ANIMATION"
      | "COMEDY"
      | "CRIME"
      | "DOCUMENTARY"
      | "DRAMA"
      | "FAMILY"
      | "FANTASY"
      | "HISTORY"
      | "HORROR"
      | "MUSICAL"
      | "MYSTERY"
      | "ROMANCE"
      | "SCI_FI"
      | "SPORT"
      | "SUPERHERO"
      | "THRILLER"
      | "WAR"
    )[];
    rating: "G" | "P" | "PG" | "R";
    videoDetails: {
      languageCode: "en";
      title: string;
      description: string;
    }[];
    videoAttachments: {
      type: "VIDEO" | "PICTURE";
      url: string;
      order: number;
    }[];
    videoSubtitles: {
      languageCode: "en";
      url: string;
      fileName: string;
    }[];
    videoTags: {
      type: string;
      value: string;
    }[];
    videoDirectorCrewIds: number[];
    videoWriterCrewIds: number[];
    videoCastCrewIds: number[];
  }
