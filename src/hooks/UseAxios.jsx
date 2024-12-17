import axios from "axios";
import React, { useEffect } from "react";
import UseAUth from "./UseAUth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const UseAxios = () => {
  const { logOut } = UseAUth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptors", error);
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout user");
          logOut()
            .then(() => {
              console.log("logged out user");
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default UseAxios;
