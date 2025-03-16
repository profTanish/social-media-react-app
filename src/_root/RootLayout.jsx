import { Outlet } from "react-router-dom";

import Topbar from "../components/shared/Topbar";
import Sidebar from "../components/shared/Sidebar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] min-h-screen">
      <Topbar />
      <Sidebar />

      <section className="flex flex-1 h-full p-5">
        <Outlet />
      </section>
    </div>
  );
};
  
export default RootLayout;