import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Register from "../pages/Register/Register";
import SignIn from "../pages/Login/SignIn";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/myApplication/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
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
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications></MyApplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element:<PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
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
