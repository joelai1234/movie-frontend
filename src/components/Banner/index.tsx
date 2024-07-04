import { Button, Fade, Popper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export default function Banner() {
  const navigate = useNavigate();

  // select
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <div className="relative mb-0 h-full max-h-[600px] pb-0">
      <img
        className="mb-0 block max-h-[600px] w-full object-cover pb-0"
        src="https://image.tmdb.org/t/p/original/coATv42PoiLqAFKStJiMZs2r6Zb.jpg"
        alt="banner"
      />
      <div className="absolute left-6 top-16 z-50">
        <Button
          className="border-white/40 px-5 text-white"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={handleClick}
        >
          Category: All movies
        </Button>
        <Popper
          style={{
            zIndex: 1000,
          
          }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          transition
          placement="bottom-start"
        >
          {({ TransitionProps }) => (
            <Fade
            
              {...TransitionProps}
              timeout={350}
            >
              <div
                style={{
                  width: 420,
                  backgroundColor: "#00000077",
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 16,
                  paddingBottom: 16,
                  border: "1px solid #626262",
                  borderRadius: 4,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <div style={{ cursor: "pointer" }}>All</div>
                <div style={{ cursor: "pointer" }}>Crime</div>
                <div style={{ cursor: "pointer" }}>History</div>
                <div style={{ cursor: "pointer" }}>Sci-fi</div>
                <div style={{ cursor: "pointer" }}>Action</div>
                <div style={{ cursor: "pointer" }}>Documentary</div>
                <div style={{ cursor: "pointer" }}>Horror</div>
                <div style={{ cursor: "pointer" }}>Sport</div>
                <div style={{ cursor: "pointer" }}>Adventure</div>
                <div style={{ cursor: "pointer" }}>Drama</div>
                <div style={{ cursor: "pointer" }}>Musical</div>
                <div style={{ cursor: "pointer" }}>Superhero</div>
                <div style={{ cursor: "pointer" }}>Animation</div>
                <div style={{ cursor: "pointer" }}>Family</div>
                <div style={{ cursor: "pointer" }}>Mystery</div>
                <div style={{ cursor: "pointer" }}>Thriller</div>
                <div style={{ cursor: "pointer" }}>Comedy</div>
                <div style={{ cursor: "pointer" }}>Fantasy</div>
                <div style={{ cursor: "pointer" }}>Romance</div>
                <div style={{ cursor: "pointer" }}>War</div>
              </div>
            </Fade>
          )}
        </Popper>
      </div>
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
