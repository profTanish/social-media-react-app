import { Outlet } from "react-router-dom";

import Topbar from "../components/shared/Topbar";
import Sidebar from "../components/shared/Sidebar";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Topbar />
      <Sidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};
  
export default RootLayout;