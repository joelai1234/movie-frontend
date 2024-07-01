import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import SettingsLayout from "./components/SettingsLayout";
import PrivateRoute from "./services/auth/containers/PrivateRoute";
import AuthProvider from "./services/auth/containers/AuthProvider";

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/components",
    async lazy() {
      const Components = await import("./pages/Components");
      return {
        Component: Components.default,
      };
    },
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        async lazy() {
          const Home = await import("./pages/Home");
          return {
            Component: Home.default,
          };
        },
      },
      {
        path: "/detail/:id",
        async lazy() {
          const Detail = await import("./pages/Detail");
          return {
            Component: Detail.default,
          };
        },
      },
      {
        path: "/search",
        async lazy() {
          const Search = await import("./pages/Search");
          return {
            Component: Search.default,
          };
        },
      },
      {
        path: "/auth/sign-in",
        async lazy() {
          const SignIn = await import("./pages/SignIn");
          return {
            Component: SignIn.default,
          };
        },
      },
      {
        path: "/auth/sign-up",
        async lazy() {
          const SignIn = await import("./pages/SignUp");
          return {
            Component: SignIn.default,
          };
        },
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <SettingsLayout />,
            children: [
              {
                path: "/profile",
                async lazy() {
                  const Profile = await import("./pages/Profile");
                  return {
                    Component: Profile.default,
                  };
                },
              },
              {
                path: "/videos",
                async lazy() {
                  const Videos = await import("./pages/Videos");
                  return {
                    Component: Videos.default,
                  };
                },
              },
              {
                path: "/upload-video",
                async lazy() {
                  const UploadVideo = await import("./pages/UploadVideo");
                  return {
                    Component: UploadVideo.default,
                  };
                },
              },
              {
                path: "/edit-video/:id",
                async lazy() {
                  const EditVideo = await import("./pages/EditVideo");
                  return {
                    Component: EditVideo.default,
                  };
                },
              },
              {
                path: "/favorites",
                async lazy() {
                  const Favorites = await import("./pages/Favorites");
                  return {
                    Component: Favorites.default,
                  };
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>
      {/* </Suspense> */}
    </>
  );
}

export default App;
