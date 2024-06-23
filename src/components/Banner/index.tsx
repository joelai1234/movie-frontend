import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="relative mb-0 h-full max-h-[600px] pb-0">
      <img
        className="mb-0 block max-h-[600px] w-full object-cover pb-0"
        src="https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg"
        alt="banner"
      />
      <div
        className="absolute left-0 top-0 z-10 h-[600px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0) 80%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 z-20 w-full px-14 py-10">
        <Typography className="font-medium" variant="h2">
          Inside Out
        </Typography>
        <Typography className="line-clamp-3 max-w-[600px]" variant="h5">
          The beloved characters Gru and Lucy and their adorable daughters
          Maomao, Didi and An An are about to start a new chapter in their
          family life, welcoming a new member of the Gru family, Gru II, and
          this little baby will also Torturing Gru, a new dad, in every possible
          way. This time Gru must face a new nemesis, the bully Max, and his
          dangerous, beautiful and sexy girlfriend Valentina, and the whole
          family is forced to flee.
        </Typography>
        <Button
          size="large"
          className="mt-8 rounded-full bg-red-600 px-10 py-2 text-white"
          onClick={() => {
            navigate("/detail");
          }}
        >
          See more
        </Button>
      </div>
    </div>
  );
}
