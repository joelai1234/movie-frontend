import { Button, IconButton, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import StarIcon from "@mui/icons-material/Star";

export default function Message() {
  return (
    <div className="flex gap-8">
      <div className="h-10 w-10 rounded-full bg-slate-50" />
      <div className="w-[582px] space-y-2">
        <div className="flex items-center justify-between py-1">
          <Typography variant="body2">John Doe</Typography>
          <div className="flex items-center">
            <Typography variant="body2">July 1, 2024</Typography>
            <StarIcon className="ml-2 mr-1 text-yellow-500" fontSize="small" />
            <Typography variant="body2">10</Typography>
          </div>
        </div>
        <div>
          <Typography variant="body2">
            I had the pleasure of seeing 'Inside Out' at the Cannes Film
            Festival and I must say it was wonderful and a huge step-up from
            Pixar's recent efforts. The trailers don't really do it justice. The
            story may seem complicated for younger viewers, but the way Pixar
            tells the story fits for both adults and children. The pacing is in
            the vein of Wall-E, and in that sense it is very much a film for
            adults as it is for kids (like most Pixar movies). The story here is
            surprisingly raw and emotional, one that has very deep underlying
            themes that adults will connect with. Many of the audience members
            were crying at the end. It has one of the most original stories for
            an animation in the last few years, and I believe many people
            (especially adults) will form a connection to it.
          </Typography>
        </div>
      </div>
      <div className="flex h-fit items-center gap-1">
        <IconButton className="h-fit" size="small">
          <ThumbUpOffAltIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2">10</Typography>
      </div>
      <div className="flex h-fit items-center gap-1">
        <IconButton className="h-fit" size="small">
          <ThumbDownOffAltIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2">1</Typography>
      </div>
      <div>
        <Button
          className="rounded-full normal-case text-white"
          size="small"
          variant="text"
        >
          Replay
        </Button>
      </div>
    </div>
  );
}
