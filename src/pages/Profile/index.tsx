import { Button, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { AccountCircle } from "@mui/icons-material";
import MoviesSlides from "../../components/MoviesSlides";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Profile() {
  return (
    <div className="mt-16 px-8">
      <div className="flex items-center gap-4 pt-8">
        <AccountCircle className="h-28 w-28" />
        {/* 
        <div className="h-28 w-28 rounded-full bg-slate-300">
        </div> */}
        <div>
          <Typography className="font-medium" variant="h4" gutterBottom>
            joe lai
          </Typography>
        </div>
      </div>
      <div className="flex gap-4 pt-6">
        <Button
          className="ml-auto"
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload subtitle
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
      <div className="space-y-8 py-8">
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Binge-Worthy Shows
          </Typography>
          <MoviesSlides id="1" />
        </div>
        <div>
          <Typography className="px-12 font-medium" variant="h6" gutterBottom>
            Crime-Time
          </Typography>
          <MoviesSlides id="2" />
        </div>

      </div>
    </div>
  );
}
