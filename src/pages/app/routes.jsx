import { lazy } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? children : <Navigate to={"/login"} />;
};
export const PublicRoute = ({ children }) => {
  const sessionInfo = JSON.parse(sessionStorage.getItem("storage"));
  return sessionInfo ? <Navigate to={"/"} /> : children;
};

const Login = lazy(() => import("../login/components/Login"));
const NotFound = lazy(() => import("./NotFound.jsx"));

/* Layout y contenido dentro de el */
const LayoutAdmin = lazy(() => import("../../layouts/LayoutAdmin.jsx"));
const Dashboard = lazy(() => import("../dashboard/components/Dashboard.jsx"));
const Profile = lazy(() => import("../profile/components/Profile.jsx"));

export const routes = () => [
  {
    path: "/",
    children: [
      {
        index: true,
        path: "",
        element: (
          <PublicRoute>
            <Dashboard />
          </PublicRoute>
        ),
      },
      {
        index: false,
        path: "profile",
        element: (
          <PublicRoute>
            <Profile />
          </PublicRoute>
        ),
      },
    ],
    element: (
      <PublicRoute>
        <LayoutAdmin />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    children: null,
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    children: null,
    element: (
      <PublicRoute>
        <NotFound />
      </PublicRoute>
    ),
  },
];
