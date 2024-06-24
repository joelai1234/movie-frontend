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
    // element: <Components />,
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
        // element: <Home />,
        async lazy() {
          const Home = await import("./pages/Home");
          return {
            Component: Home.default,
          };
        },
      },
      {
        path: "/detail",
        async lazy() {
          const Detail = await import("./pages/Detail");
          return {
            Component: Detail.default,
          };
        },
      },
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
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <RouterProvider router={router} />
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>

      {/* </Suspense> */}
    </>
  );
}

export default App;
