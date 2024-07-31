import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "swiper/css";

import { RouterProvider } from "react-router-dom";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./services/auth/containers/AuthProvider";
import { router } from "./routes/routes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <AuthProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <RouterProvider router={router} />
            </LocalizationProvider>
          </AuthProvider>
          <CssBaseline />
        </ThemeProvider>
      </QueryClientProvider>
      {/* </Suspense> */}
    </>
  );
}

export default App;
