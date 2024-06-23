import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="bg-red-600 px-4 py-2 text-center">
      <Typography variant="body2">
        Copyright © Website {new Date().getFullYear()}.
      </Typography>
    </footer>
  );
}
