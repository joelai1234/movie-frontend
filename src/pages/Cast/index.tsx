import { Button, Typography } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoviesSlides from "../../components/MoviesSlides";
import { movies as mockMovies } from "../../data/movies";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { RolesData } from "../../model/movie";
import axios from "axios";
import ImageWithFallback from "../../components/ImageWithFallback";

const VITE_BACKEND_API_BASE_URL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export default function Cast() {
  const { id } = useParams();
  // const [isExpand, setIsExpand] = useState(false);
  const navigate = useNavigate();

  const { data } = useQuery(["/api/v1/crews", id], async () => {
    return axios.get<RolesData>(
      VITE_BACKEND_API_BASE_URL + `/api/v1/crews/${id}`,
    );
  });

  console.log(data);

  return (
    <div className="pt-[64px]">
      <div className="px-10 py-5">
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
              <div className="flex gap-12">
                {/* <div className="h-56 w-56 rounded-sm bg-gray-400" /> */}
                <ImageWithFallback
                    className="h-56 w-56 rounded-sm object-none"
                    src={data?.data.pictureUrl ?? ''}
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
                      Born(dev)
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      September 16, 1971 (age 52) Burlington, Massachusetts, USA
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Education(dev)
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      Boston College (BA)
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Nicknames(dev)
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      Cool Cat Amy, Crazy Amy, Phohlercoaster
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Spouse(dev)
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      Will Arnett (m. 2003; div. 2016)
                    </Typography>
                  </div>
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Official Sites(dev)
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      Instagram, X
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-10">
              <div>
                <Typography variant="h6">
                  People also search for(dev)
                </Typography>
              </div>
              <div className="grid grid-cols-3 gap-x-7 gap-y-3">
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
                <div className="space-y-1 text-center">
                  <div className="h-20 w-20 bg-slate-200" />
                  <Typography variant="body2">Will Arnett</Typography>
                </div>
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
          <div className="mt-10">
            <div className="space-y-8 py-8">
              <div>
                <div className="flex justify-between">
                  <Typography className="font-medium" variant="h6" gutterBottom>
                    Recent movies(dev)
                  </Typography>
                  <Button
                    className="normal-case text-white"
                    size="small"
                    variant="text"
                    startIcon={<ArrowForwardIosIcon />}
                  >
                    View all (95)
                  </Button>
                </div>
                <MoviesSlides id="1" movies={mockMovies} />
              </div>
              <div>
                <div className="flex justify-between">
                  <Typography className="font-medium" variant="h6" gutterBottom>
                    Most popular movies(dev)
                  </Typography>
                  <Button
                    className="normal-case text-white"
                    size="small"
                    variant="text"
                    startIcon={<ArrowForwardIosIcon fontSize="small" />}
                  >
                    View all (95)
                  </Button>
                </div>
                <MoviesSlides id="1" movies={mockMovies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
