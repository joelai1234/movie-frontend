import { Button, Collapse, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import MoviesSlides from "../../components/MoviesSlides";
import { movies as mockMovies } from "../../data/movies";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Cast() {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="pt-[64px]">
      <div className="px-10 py-5">
        <div>
          <div>
            <Button
              className="normal-case text-white"
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
            >
              Back
            </Button>
          </div>

          <div className="mt-2 flex justify-between">
            <div className="space-y-3">
              <Typography variant="h4">Amy Poehler</Typography>
              <div className="flex gap-12">
                <div className="h-56 w-56 rounded-sm bg-gray-400" />
                <div className="space-y-4">
                  <div className="flex">
                    <Typography
                      className="w-24 shrink-0 text-gray-500"
                      variant="body2"
                    >
                      Occupations
                    </Typography>
                    <Typography className="w-80" variant="body2">
                      Actress, comedian, producer, writer, director
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
                      September 16, 1971 (age 52) Burlington, Massachusetts, USA
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
                      Boston College (BA)
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
                      Cool Cat Amy, Crazy Amy, Phohlercoaster
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
                      Will Arnett (m. 2003; div. 2016)
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
                      Instagram, X
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-10">
              <div>
                <Typography variant="h6">People also search for</Typography>
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
              <Typography variant="body2">
                Amy Poehler (/ˈpoʊlər/ POH-lər; born September 16, 1971)[1] is
                an American actress and comedian. After studying improv at
                Chicago's Second City and ImprovOlympic in the early 1990s,
                Poehler co-founded the improvisational-comedy troupe Upright
                Citizens Brigade. The group moved to New York City in 1996,
                where their act became a half-hour sketch-comedy series on
                Comedy Central in 1998. Along with other members of the comedy
                group, Poehler is a founder of the Upright Citizens Brigade
                Theatre. In 2001, Poehler joined the NBC sketch comedy show
                Saturday Night Live (SNL) as a cast member. From 2004 until
                2008, she served as co-anchor of the show's news parody segment,
                Weekend Update. Poehler left SNL halfway through her eighth
                season to star as Leslie Knope in the sitcom Parks and
                Recreation, which she produced and starred in until 2015.
              </Typography>
              <Collapse in={isExpand}>
                <Typography className="mt-4" variant="body2">
                  Amy Poehler (/ˈpoʊlər/ POH-lər; born September 16, 1971)[1] is
                  an American actress and comedian. After studying improv at
                  Chicago's Second City and ImprovOlympic in the early 1990s,
                  Poehler co-founded the improvisational-comedy troupe Upright
                  Citizens Brigade. The group moved to New York City in 1996,
                  where their act became a half-hour sketch-comedy series on
                  Comedy Central in 1998. Along with other members of the comedy
                  group, Poehler is a founder of the Upright Citizens Brigade
                  Theatre. In 2001, Poehler joined the NBC sketch comedy show
                  Saturday Night Live (SNL) as a cast member. From 2004 until
                  2008, she served as co-anchor of the show's news parody
                  segment, Weekend Update. Poehler left SNL halfway through her
                  eighth season to star as Leslie Knope in the sitcom Parks and
                  Recreation, which she produced and starred in until 2015.
                </Typography>
              </Collapse>
            </div>

            <div className="flex justify-end">
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
            </div>
          </div>
          <div className="mt-10">
            <div className="space-y-8 py-8">
              <div>
                <div className="flex justify-between">
                  <Typography className="font-medium" variant="h6" gutterBottom>
                    Recent movies
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
                    Most popular movies
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
