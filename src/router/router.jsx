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
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";
import AllJob from "../pages/AllJobs/AllJob";
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
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/allJobs",
        element: <AllJob></AllJob>,
      },

      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },

      // {
      //   path: "/viewApplications/:job_id",
      //   element: (
      //     <PrivateRoute>
      //       <ViewApplication></ViewApplication>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      // },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication></ViewApplication>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
        loader: ({ params }) => {
          console.log(params.job_id); // Debugging: Ensure job_id is passed correctly
          return fetch(
            `http://localhost:5000/job-applications/jobs/${params.job_id}`
          ).then((res) => res.json());
        },
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
export default router;
