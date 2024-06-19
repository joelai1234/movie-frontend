// import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "/components",
    // element: <Components />,
    async lazy() {
      const Components = await import("./pages/Components")
      return {
        Component: Components.default
      }
    },
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        // element: <Home />,
        async lazy() {
          const Home = await import("./pages/Home")
          return {
            Component: Home.default
          }
        },
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <RouterProvider router={router} />
      {/* </Suspense> */}
    </>
  );
}

export default App;
