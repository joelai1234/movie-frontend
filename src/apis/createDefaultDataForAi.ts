// 這是一個用來創建預設資料的程式碼
// 生成條件：
// 1. 只顯現 createDefaultData function 裡面的 defaultData 程式碼，其他的不用顯現，這樣太長了，不好閱讀
// 2. 電影名稱："The Matrix"
// 3. crew 資料要詳細填寫，不要有缺漏
// 4. director, writer, cast 可能有多個，要填寫所有資料
// 5. 電影圖片 coverPictureUrl 和 videoAttachments 優先使用 IMDb 的圖片，若無再使用其他圖片
// 6. websites 優先 X, ig 的網址，若無再使用其他網址
// 7. crew 的 pictureUrl 優先使用 wiki 的圖片，若無再使用其他圖片

// 生成方法：
// 1. 呼叫 CreateManyCrews 創建所有 crew
// 2. 將 director, writer, cast 的 id 填入 CreateVideoPayload 的 videoDirectorCrewIds, videoWriterCrewIds, videoCastCrewIds
// 3. 呼叫 CreateVideo 創建電影

import axios from "axios";

const BACKEND_URL = "https://video-platform-api.tokenbricks-dev.com/api";

const instance = axios.create({
  baseURL: BACKEND_URL,
});

interface CrewResponse {
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

type CreateCrewPayload = Omit<CrewResponse, "id" | "totalViews">;

interface CreateVideoPayload {
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
    type: "PICTURE";
    url: string;
    order: number;
  }[];
  videoTags: {
    type: string;
    value: string;
  }[];
  videoDirectorCrewIds: number[];
  videoWriterCrewIds: number[];
  videoCastCrewIds: number[];
}

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

  const defaultData: {
    createCrewsPayload: CreateCrewPayload[];
    createVideoPayload: Omit<
      CreateVideoPayload,
      "videoDirectorCrewIds" | "videoWriterCrewIds" | "videoCastCrewIds"
    >;
  }[] = [
      {
        createVideoPayload: {
          sourceType: "URL",
          source: "https://example.com/the-lord-of-the-rings.mp4",
          coverPictureUrl:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
          name: "The Lord Of The Rings: The Fellowship Of The Ring",
          releaseYear: 2001,
          duration: 178,
          categories: ["ACTION", "ADVENTURE", "FANTASY"],
          rating: "PG",
          videoDetails: [
            {
              languageCode: "en",
              title: "The Lord Of The Rings: The Fellowship Of The Ring",
              description:
                "A young hobbit, Frodo, is tasked with destroying a powerful ring.",
            },
          ],
          videoAttachments: [
            {
              type: "PICTURE",
              url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
              order: 1,
            },
          ],
          videoTags: [
            {
              type: "genre",
              value: "fantasy",
            },
          ],
        },
      createCrewsPayload: [
        {
          name: "Peter Jackson",
          roles: ["DIRECTOR", "WRITER"],
          introduction:
            "Peter Jackson is a New Zealand film director, screenwriter, and producer.",
          pictureUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Peter_Jackson_SDCC_2014.jpg/440px-Peter_Jackson_SDCC_2014.jpg",
          born: "1961-10-31",
          education: "NA",
          nickname: "PJ",
          spouse: "Fran Walsh",
          websites: [
            {
              name: "ig",
              url: "https://www.instagram.com/sir_peterjackson/",
            },
          ],
        },
        {
          name: "Fran Walsh",
          roles: ["WRITER"],
          introduction:
            "Fran Walsh is a screenwriter, film producer, and composer from New Zealand.",
          pictureUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Fran_Walsh_DNZM_%28cropped%29.jpg/440px-Fran_Walsh_DNZM_%28cropped%29.jpg",
          born: "1959-01-10",
          education: "Victoria University of Wellington",
          nickname: "Fran",
          spouse: "Peter Jackson",
          websites: [],
        },
        {
          name: "Elijah Wood",
          roles: ["CAST"],
          introduction:
            "Elijah Wood is an American actor best known for his role as Frodo Baggins in The Lord of the Rings.",
          pictureUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Elijah_Wood_%2847955397556%29_%28cropped%29.jpg/440px-Elijah_Wood_%2847955397556%29_%28cropped%29.jpg",
          born: "1981-01-28",
          education: "NA",
          nickname: "Elwood",
          spouse: "NA",
          websites: [
            {
              name: "Twitter",
              url: "https://twitter.com/elijahwood",
            },
          ],
        },
        {
          name: "Ian McKellen",
          roles: ["CAST"],
          introduction:
            "Sir Ian McKellen is an English actor known for his roles in The Lord of the Rings and X-Men.",
          pictureUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/440px-SDCC13_-_Ian_McKellen.jpg",
          born: "1939-05-25",
          education: "St Catharine's College, Cambridge",
          nickname: "Serena",
          spouse: "NA",
          websites: [
            {
              name: "Official Website",
              url: "http://www.mckellen.com/",
            },
          ],
        },
      ],

    },
  ];
  defaultData.forEach(async (data) => {
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
    });
  });
};
