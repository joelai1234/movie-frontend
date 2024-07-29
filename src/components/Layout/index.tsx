import { Outlet } from "react-router-dom";
import Header from "../Header";
import NotificationProvider from "../NotificationProvider";
// import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="fixed z-50 w-full">
          <Header />
        </div>
        <main className="flex-1">
          {/* <Suspense fallback={<Loader />}> */}
          <NotificationProvider />

          <Outlet />
          {/* </Suspense> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}
