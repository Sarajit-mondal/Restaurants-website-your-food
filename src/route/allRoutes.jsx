import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import MenuPage from "../pages/home/menu/MenuPage";
import OurShop from "../pages/home/ourshop/OurShop";
import LogIn from "../pages/loginAndSIgnUp/LogIn";
import SignUp from "../pages/loginAndSIgnUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import MyCarts from "../components/dashboard/links/myCarts/MyCarts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourmenu",
        element: <MenuPage></MenuPage>,
      },
      {
        path: "/ourshop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  //dashboard
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "dashboard/myCart",
        element: <MyCarts></MyCarts>,
      },
    ],
  },
]);

export default router;
