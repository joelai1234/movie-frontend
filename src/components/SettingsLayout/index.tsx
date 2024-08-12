import {
  AccountCircle,
  CloudUpload,
  VideoCameraFront,
  Favorite,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAuthStore } from "../../services/auth/store/useAuthStroe";

export default function SettingsLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userData } = useAuthStore();

  return (
    <div className="mt-16 flex">
      <div className="flex w-60 shrink-0 flex-col items-center gap-2 border-0 border-r border-solid border-white/20 pt-8">
        <AccountCircle className="h-28 w-28" />
        <div>
          <Typography className="font-medium" variant="h6">
            {userData?.name}
          </Typography>
        </div>
        <Button
          className="mb-4 mt-2 rounded-3xl bg-[#335C67] px-6 capitalize text-white"
          variant="contained"
          size="large"
          startIcon={<CloudUpload />}
          onClick={() => navigate("/upload-video")}
        >
          Upload video
        </Button>
        <Box sx={{ width: "100%", maxWidth: 360 }}>
          <nav aria-label="main mailbox folders">
            <List className="space-y-1">
              {/* <ListItem className="px-3" disablePadding onClick={() => navigate("/profile")}>
                <ListItemButton className="rounded-lg" selected={pathname === "/profile"}>
                  <ListItemIcon className="min-w-10">
                    <SupervisedUserCircle />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem> */}
              <ListItem
                className="px-3"
                disablePadding
                onClick={() => navigate("/favorites")}
              >
                <ListItemButton
                  className="rounded-lg"
                  selected={pathname === "/favorites"}
                >
                  <ListItemIcon className="min-w-10">
                    <Favorite />
                  </ListItemIcon>
                  <ListItemText primary="Favorites" />
                </ListItemButton>
              </ListItem>
              <ListItem
                className="px-3"
                disablePadding
                onClick={() => navigate("/videos")}
              >
                <ListItemButton
                  className="rounded-lg"
                  selected={pathname === "/videos"}
                >
                  <ListItemIcon className="min-w-10">
                    <VideoCameraFront />
                  </ListItemIcon>
                  <ListItemText primary="Videos" />
                </ListItemButton>
              </ListItem>

              {/* <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem> */}
            </List>
          </nav>
        </Box>
      </div>
      <div className="h-[calc(100vh-64px)] w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
