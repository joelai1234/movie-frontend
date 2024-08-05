import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../services/auth/containers/PrivateRoute";
import SettingsLayout from "../components/SettingsLayout";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/components",
    async lazy() {
      const Components = await import("../pages/Components");
      return {
        Component: Components.default,
      };
    },
  },
  {
    path: "/create-default-data",
    async lazy() {
      const CreateDefaultMovies = await import("../pages/CreateDefaultMovies");
      return {
        Component: CreateDefaultMovies.default,
      };
    },
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        async lazy() {
          const Home = await import("../pages/Home");
          return {
            Component: Home.default,
          };
        },
      },
      {
        path: "/detail/:id",
        async lazy() {
          const Detail = await import("../pages/Detail");
          return {
            Component: Detail.default,
          };
        },
      },
      {
        path: "/search/movies",
        async lazy() {
          const SearchMovies = await import("../pages/SearchMovies");
          return {
            Component: SearchMovies.default,
          };
        },
      },
      {
        path: "/search/people",
        async lazy() {
          const SearchPeople = await import("../pages/SearchPeople");
          return {
            Component: SearchPeople.default,
          };
        },
      },
      {
        path: "/auth/sign-in",
        async lazy() {
          const SignIn = await import("../pages/SignIn");
          return {
            Component: SignIn.default,
          };
        },
      },
      {
        path: "/auth/sign-up",
        async lazy() {
          const SignIn = await import("../pages/SignUp");
          return {
            Component: SignIn.default,
          };
        },
      },
      {
        path: "/cast/:id",
        async lazy() {
          const Cast = await import("../pages/Cast");
          return {
            Component: Cast.default,
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
                  const Profile = await import("../pages/Profile");
                  return {
                    Component: Profile.default,
                  };
                },
              },
              {
                path: "/videos",
                async lazy() {
                  const Videos = await import("../pages/Videos");
                  return {
                    Component: Videos.default,
                  };
                },
              },
              {
                path: "/upload-video",
                async lazy() {
                  const UploadVideo = await import("../pages/UploadVideo");
                  return {
                    Component: UploadVideo.default,
                  };
                },
              },
              {
                path: "/edit-video/:id",
                async lazy() {
                  const EditVideo = await import("../pages/EditVideo");
                  return {
                    Component: EditVideo.default,
                  };
                },
              },
              {
                path: "/favorites",
                async lazy() {
                  const Favorites = await import("../pages/Favorites");
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
