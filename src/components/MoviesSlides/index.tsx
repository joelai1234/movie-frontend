import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import { Navigation } from "swiper/modules";
import { IMovie } from "../../model/movie";
import { useMediaQuery } from "@mui/material";

interface MoviesSlidesProps {
  id: string;
  movies: IMovie[];
}

export default function MoviesSlides({ id, movies }: MoviesSlidesProps) {
  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <div className="relative flex items-center space-x-2">
      <Swiper
        className="ml-0"
        modules={[Navigation]}
        slidesPerView={isMobile ? 3 : "auto"}
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
              <div className="sm:w-56">
                <MovieCard movie={movie} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
