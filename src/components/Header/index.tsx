import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../../utils/helper";

export default function Header() {
  const { pathname } = useLocation();
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    // if (!/\/detail\/[0-9]*/.test(pathname) && pathname !== "/search") {
    //     setSearchValue("");
    // }
    if (
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/detail"
    ) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
      const navStyleHandler = () => {
        if (document.documentElement.scrollTop > 50) {
          setIsTransparent(false);
        } else {
          setIsTransparent(true);
        }
      };
      window.addEventListener("scroll", navStyleHandler);
      return () => {
        window.removeEventListener("scroll", navStyleHandler);
      };
    }
  }, [pathname]);

  return (
    <div>
      <AppBar
        className={cn(
          "transition-all px-8",
          isTransparent ? "bg-transparent bg-none shadow-none" : "bg-red-950",
        )}
      >
        <Toolbar>
          <Typography variant="h6">Movies</Typography>
          <Paper
            className="mx-auto h-9 bg-transparent shadow-none transition hover:bg-white/10"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              className="w-60 transition-all focus-within:w-80"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className="space-x-2">
            <Button
              className="border-white/60 text-white hover:border-white"
              variant="outlined"
            >
              Sign In
            </Button>
            <Button
              className="border-white/60 text-white hover:border-white"
              variant="outlined"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
