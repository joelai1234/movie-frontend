import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import 'swiper/css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";



import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

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
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
      {/* </Suspense> */}
    </>
  );
}

export default App;
