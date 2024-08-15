import {
  AccountCircle,
  CloudUpload,
  VideoCameraFront,
  Favorite,
} from "@mui/icons-material";
import { Button, Tab, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAuthStore } from "../../services/auth/store/useAuthStroe";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

export default function SettingsLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userData } = useAuthStore();
  

  return (
    <div className="mt-[56px] sm:mt-16 flex flex-col sm:flex-row">
      <div className="flex justify-between pr-4 sm:hidden pt-2">
        <TabContext value={pathname}>
          <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
            <TabList
              classes={{
                indicator: "bg-[#E09F3E] h-0",
                
              }}
              onChange={(_,value) => {
                navigate(value);
              }}
            >
              <Tab
                classes={{
                  selected: "text-[#E09F3E]",
                }}
                className="normal-case"
                label="Favorites"
                value="/favorites"
              />
              <Tab
                classes={{
                  selected: "text-[#E09F3E]",
                }}
                className="normal-case"
                label="Videos"
                value="/videos"
              />
            </TabList>
          </Box>
        </TabContext>
        <Button
          className="mb-4 mt-2 rounded-3xl bg-[#335C67] px-6 capitalize text-white"
          variant="contained"
          size="small"
          startIcon={<CloudUpload />}
          onClick={() => navigate("/upload-video")}
        >
          Upload
        </Button>
      </div>
      <div className="hidden w-60 shrink-0 flex-col items-center gap-2 border-0 border-r border-solid border-white/20 pt-8 sm:flex">
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
            </List>
          </nav>
        </Box>
      </div>
      <div className="h-[calc(100vh-119px)] sm:h-[calc(100vh-64px)] w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
