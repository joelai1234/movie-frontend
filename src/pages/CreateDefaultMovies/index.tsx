import { Button } from "@mui/material";

import { createDefaultData } from "../../apis/createDefaultData";

export default function CreateDefaultMovies() {
  return (
    <div className="space-y-4 bg-slate-900 p-3">
      <Button
        className="w-fit"
        onClick={() => {
          createDefaultData();
        }}
      >
        Create Default Data
      </Button>
    </div>
  );
}
