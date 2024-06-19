import MovieCard from "../../components/MovieCard";

export default function Components() {
  return (
    <div className=" bg-slate-900">
      <h2>Typography</h2>
      <h1 className="text-xl font-normal text-white">Logo Text</h1>
      <h2 className="text-[60px] text-white">Banner Title</h2>
      <h5 className="text-2xl text-white">Banner Subtitle</h5>
      <p className="text-xl font-bold text-white">Label</p>
      <p className="font-bold text-white">Movie Text</p>
      <h2>Button</h2>
      <h2>Card</h2>
      <MovieCard
        movie={{
          id: "string",
          name: "string",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BZDdlNTIwNjYtNzVhNS00MGVmLTk1ZGYtZmZiMjhiMmQ1ZjkwXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
          description: "string",
        }}
      />
    </div>
  );
}
