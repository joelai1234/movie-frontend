import { Button, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { RolesData } from "../../model/movie";
import axios from "axios";
import ImageWithFallback from "../../components/ImageWithFallback";
import MovieTable from "../../components/MovieTable";
import { CrewResponse } from "../../apis/model/crew";
import useAuth from "../../services/auth/hooks/useAuth";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Cast() {
  const { id } = useParams();
  const authAxios = useAuth();
  // const [isExpand, setIsExpand] = useState(false);
  const navigate = useNavigate();

  const { data } = useQuery(["/api/v1/crews", id], async () => {
    return axios.get<RolesData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/crews/${id}`,
    );
  });

  const { data: recommendationsRes } = useQuery(
    ["/api/v1/crews/${id}/recommendations", id, authAxios],
    async () => {
      return axios.get<{ data: CrewResponse[] }>(
        `${VITE_BACKEND_API_BASE_URL}/api/v1/crews/${id}/recommendations`,
        {
          headers: {
            "accept-language": "en",
          },
        },
      );
    },
  );

  const recommendationsData = recommendationsRes?.data.data.slice(0, 6);


  return (
    <div className="pt-[64px]">
      <div className="px-5 sm:px-10 py-5">
        <div>
          <div>
            <Button
              className="normal-case text-white"
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </div>

          <div className="mt-2 flex justify-between">
            <div className="space-y-3">
              <Typography variant="h4">{data?.data.name}</Typography>
              <div className="flex gap-6 sm:gap-12 flex-col sm:flex-row">
                <ImageWithFallback
                  className="size-56 rounded-sm object-none"
                  src={data?.data.pictureUrl ?? ""}
                  fallbackSrc="/images/bg-sign-in.jpeg"
                  alt="avatar"
                />
                <div className="space-y-4">
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Occupations
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      {data?.data.roles.join(", ")}
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Born
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      {data?.data.born}
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Education
                    </Typography>
                    <Typography className="w-80" variant="body2">
                    {data?.data.education}
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Nicknames
                    </Typography>
                    <Typography className="w-80" variant="body2">
                    {data?.data.nickname}
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Spouse
                    </Typography>
                    <Typography className="w-80" variant="body2">
                    {data?.data.spouse}
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Official Sites
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      {data?.data.websites.map((website) => (
                        <a
                          className=" text-blue-300 no-underline capitalize"
                          key={website.name}
                          href={website.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {website.name}
                        </a>
                      ))}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-10 hidden sm:block">
              <div>
                <Typography variant="h6">
                  People also search for
                </Typography>
              </div>
              <div className="grid grid-cols-3 gap-x-7 gap-y-3">
                {recommendationsData?.map((item) => (
                  <div key={item.id} className="space-y-1 text-center">
                    <ImageWithFallback className="h-20 w-20 bg-slate-200 object-cover"
                    src={item.pictureUrl}
                    fallbackSrc="/images/bg-sign-in.jpeg"
                    alt="avatar"
                    />
                    <Typography variant="body2">{item.name}</Typography>
                  </div>
                ))}
              
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-[800px] space-y-3">
            <Typography variant="h5">About</Typography>
            <div>
              <Typography variant="body2">{data?.data.introduction}</Typography>
              {/* <Collapse in={isExpand}>
                <Typography className="mt-4" variant="body2">
               
                </Typography>
              </Collapse> */}
            </div>

            {/* <div className="flex justify-end">
              <Button
                className="normal-case text-white"
                variant="text"
                onClick={() => setIsExpand(!isExpand)}
                startIcon={
                  <KeyboardArrowDownIcon
                    className={isExpand ? "rotate-180" : ""}
                  />
                }
              >
                See more
              </Button>
            </div> */}
          </div>
          <div className="sm:mt-10">
            <div className="py-8">
              <MovieTable crewId={data?.data.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
