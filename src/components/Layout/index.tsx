import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="fixed w-full z-50">
          <Header />
        </div>
        <main className="flex-1">
          {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
