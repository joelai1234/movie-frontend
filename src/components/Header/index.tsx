import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../../utils/helper";
import { useUserDataStore } from "../../store/useUserDataStore";
import { AccountCircle } from "@mui/icons-material";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(true);
  const { userData, deleteUserData } = useUserDataStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    deleteUserData();
  };

  useEffect(() => {
    // if (!/\/detail\/[0-9]*/.test(pathname) && pathname !== "/search") {
    //     setSearchValue("");
    // }
    if (
      pathname === "/auth/sign-in" ||
      pathname === "/auth/sign-up" ||
      pathname === "/profile" ||
      pathname === "/videos" ||
      pathname === "/upload-video" ||
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
          "transition-all",
          isTransparent ? "bg-transparent bg-none shadow-none" : "bg-red-950",
        )}
      >
        <Toolbar>
          <Typography
            className="cursor-pointer"
            variant="h6"
            onClick={() => {
              navigate("/");
            }}
          >
            Movies
          </Typography>
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
          {!userData && (
            <div className="space-x-2">
              <Link to="/auth/sign-in">
                <Button
                  className="border-white/60 text-white hover:border-white"
                  variant="outlined"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button
                  className="border-white/60 text-white hover:border-white"
                  variant="outlined"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          {userData && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
