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
import { AccountCircle } from "@mui/icons-material";
import useAuth from "../../services/auth/hooks/useAuth";
import CustomSelect from "../CustomSelect";
import { searchTypeOptions } from "../../data/movies";

export default function Header() {
  const { pathname } = useLocation();
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("Movies");

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    setAnchorEl(null);
    signOut();
  };

  useEffect(() => {
    if (pathname !== "/home") {
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

  const handleSearch = () => {
    if (searchType === "Movie") {
      navigate("/search/movies?search=" + searchValue);
    } else if (searchType === "People") {
      navigate("/search/people?search=" + searchValue);
    }
  };

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
            <div className="">
              <CustomSelect
                data={searchTypeOptions.map((data) => ({
                  label: data.name,
                  value: data.value,
                }))}
                value={searchType}
                title={searchType}
                onChange={setSearchType}
                col={1}
                width={92}
                p={8}
              />
            </div>
            <div
              className={cn("h-6 w-[1px] bg-[#572729]", {
                hidden: isTransparent,
              })}
            ></div>
            <InputBase
              className="w-60 transition-all focus-within:w-80"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "search..." }}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                e.key === "Enter" && handleSearch();
              }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          {!isAuthenticated && (
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

          {isAuthenticated && (
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
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
