import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { cn } from "../../utils/helper";
import { IMovie } from "../../model/movie";

interface MoviesSlidesProps {
  id: string;
  movies: IMovie[];
}

export default function MoviesSlides({ id, movies }: MoviesSlidesProps) {
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
