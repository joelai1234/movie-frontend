import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import { Navigation } from "swiper/modules";
import { IMovie } from "../../model/movie";

interface MoviesSlidesProps {
  id: string;
  movies: IMovie[];
}

export default function MoviesSlides({
  id,
  movies,
}: MoviesSlidesProps) {
  return (
    <div className="relative flex items-center space-x-2">
      <Swiper
        className="ml-0"
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
    </div>
  );
}
