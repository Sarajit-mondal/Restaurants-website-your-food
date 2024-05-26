import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

function DashboardLayout() {
  return (
    <div className="max-w-7xl mx-auto flex">
      <div>
        <Dashboard></Dashboard>
      </div>
      <div className="flex-1 ml-5 py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DashboardLayout;
