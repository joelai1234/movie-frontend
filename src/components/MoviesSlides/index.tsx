import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { cn } from "../../utils/helper";
import { useLocation, useNavigate } from "react-router-dom";

const movies = [
  {
    id: "Garfield",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield2",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield3",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield4",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield5",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield6",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield7",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield8",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield9",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
  {
    id: "Garfield10",
    name: "Garfield",
    imageUrl: "https://image.tmdb.org/t/p/w500/wvMczgfFHlVV3oBH7fNxCiYHWAs.jpg",
    description:
      "Garfield, the world-famous Monday-hating, lasagna-loving cat, is about to embark on a wild outdoor adventure! After an unexpected reunion with his long-lost father, Garfield and his canine friend Odie are forced to leave their comfortable lives and embark on a risky and hilarious heist adventure with Vic.",
    updatedAt: "2024-06-07",
  },
];

interface MoviesSlidesProps {
  id: string;
}

export default function MoviesSlides({ id }: MoviesSlidesProps) {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  return (
    <div className="flex items-center space-x-2">
      <div>
        <IconButton className={cn(`prev-${id}`, "h-fit w-fit")} ref={prevBtn}>
          <ArrowBackIos />
        </IconButton>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={15}
        navigation={{
          nextEl: `.next-${id}`,
          prevEl: `.prev-${id}`,
          disabledClass: "opacity-0",
        }}
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="w-fit">
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <IconButton className={cn(`next-${id}`, "h-fit w-fit")} ref={nextBtn}>
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
}
