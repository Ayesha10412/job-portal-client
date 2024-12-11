import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Register from "../pages/Register/Register";
import SignIn from "../pages/Login/SignIn";
import Banner from "../pages/Home/Banner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
