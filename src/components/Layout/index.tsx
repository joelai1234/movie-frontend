import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
}
