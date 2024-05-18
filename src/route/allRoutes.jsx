import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import MenuPage from "../pages/home/menu/MenuPage";

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
    ],
  },
]);

export default router;
