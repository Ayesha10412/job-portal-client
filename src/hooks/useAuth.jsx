import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const UseAUth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default UseAUth;
