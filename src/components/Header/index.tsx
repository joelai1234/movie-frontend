import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "../../utils/helper";
import { AccountCircle } from "@mui/icons-material";
import useAuth from "../../services/auth/hooks/useAuth";
import CustomSelect from "../CustomSelect";
import { searchTypeOptions } from "../../data/movies";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore } from "../../services/auth/store/useAuthStroe";

export default function Header() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { pathname } = useLocation();
  const { isAuthenticated, signOut, signIn } = useAuth();
  const { userData } = useAuthStore();
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchValue, setSearchValue] = useState(search ?? "");
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [searchType, setSearchType] = useState(
    pathname === "/search/people" ? "People" : "Movies",
  );

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/favorites");
    handleClose();
  };

  const handleLogout = () => {
    setAnchorEl(null);
    signOut();
    handleClose();
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
    if (!searchValue) {
      return;
    }
    if (searchType === "Movies") {
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
            className="mx-auto hidden h-9 bg-transparent shadow-none transition hover:bg-white/10 sm:flex"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
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
          <IconButton
            className="ml-auto mr-2 sm:hidden"
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
          {!isAuthenticated && (
            <div className="ml-0 space-x-2 sm:ml-auto">
              <div>
                <Button
                  className="border-white/60 text-white hover:border-white"
                  variant="outlined"
                  onClick={() => setOpenSignInModal(true)}
                >
                  Sign In
                </Button>
                <Modal
                  open={openSignInModal}
                  onClose={() => setOpenSignInModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  disablePortal
                >
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[480px]">
                      <div className="bg-[#1f2937] px-4 pb-12 pt-4 shadow backdrop-blur-md sm:rounded-2xl">
                        <div
                          className="flex cursor-pointer justify-end"
                          onClick={() => setOpenSignInModal(false)}
                        >
                          <CloseIcon className="text-xl" />
                        </div>

                        <div className="flex flex-col justify-center text-center">
                          <h2 className="my-0 text-3xl font-bold leading-9 tracking-tight text-gray-100">
                            Welcome
                          </h2>
                          <p className="text mt-2 text-gray-400">
                            Sign in or sign up with Google
                          </p>
                        </div>

                        <div className="mt-6 px-8">
                          <div className="grid grid-cols-1 gap-4">
                            <Button
                              size="large"
                              className="rounded-3xl border-white/20 capitalize text-white shadow-lg hover:border-white"
                              variant="outlined"
                              component="label"
                              role={undefined}
                              tabIndex={-1}
                              startIcon={
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                                    fill="#EA4335"
                                  />
                                  <path
                                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                                    fill="#4285F4"
                                  />
                                  <path
                                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                                    fill="#FBBC05"
                                  />
                                  <path
                                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                                    fill="#34A853"
                                  />
                                </svg>
                              }
                              onClick={() => {
                                signIn();
                                setOpenSignInModal(false);
                              }}
                            >
                              Sign in with Google
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
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
                classes={{
                  paper: "bg-[#010305] border border-[#4b5563] rounded-md",
                }}
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
                disablePortal
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div className="flex h-[140px] w-[240px] flex-col items-center justify-center">
                  <AccountCircle className="size-[52px]" />
                  <div className="mt-2 space-y-1 text-center">
                    <p className="my-0 text-sm font-semibold text-white">
                      {userData?.name}
                    </p>
                    <p className="my-0 text-sm text-[#626262]">
                      {userData?.email}
                    </p>
                  </div>
                </div>
                <div className="h-px w-full bg-[#626262]"></div>
                <MenuItem
                  onClick={handleProfile}
                  classes={{
                    root: "flex items-center py-4",
                  }}
                >
                  <ListItemIcon>
                    <PermIdentityIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  classes={{
                    root: "flex items-center py-4",
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
