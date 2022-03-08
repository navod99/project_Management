import React from "react";
import { Redirect, Route,Routes } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate,Navigate,Outlet } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home"


const ProtectedRoute = ({ component: Component }) => {
    console.log("JJJ")
    const navigate = useNavigate();
  const user = useSelector((state) => state.auth.value);
  console.log("user", user);
  console.log("NAvod")
  return user?<Component/> :<Navigate to="/"/>
};

export default ProtectedRoute;