import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import MenuPage from "../pages/home/menu/MenuPage";
import OurShop from "../pages/home/ourshop/OurShop";
import LogIn from "../pages/loginAndSIgnUp/LogIn";

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
    ],
  },
]);

export default router;
