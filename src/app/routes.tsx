import Computing from "@/pages/computing/Computing";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Profile from "@/pages/profile/Profile";
import SignUp from "@/pages/sign-up/SignUp";
import MainLayout from "@/widgets/main-layout/MainLayout";
import SidebarLayout from "@/widgets/sidebar-layout/SidebarLayout";
import { Navigate } from "react-router-dom";

const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: isLoggedIn ? <Navigate to="/app" /> : <Login />,
      },
      {
        path: "signup",
        element: isLoggedIn ? <Navigate to="/app" /> : <SignUp />,
      },
      {
        path: "profile",
        element: isLoggedIn ? <Profile /> : <Navigate to="/login" />,
      },
    ],
  },
  {
    path: "/app",
    element: isLoggedIn ? <SidebarLayout /> : <Navigate to="/login" />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/computing" />,
      },
      {
        path: "computing",
        element: <Computing />,
      },
      {
        path: "storage",
        element: <div>Storage</div>,
      },
      {
        path: "firewall",
        element: <div>Firewall</div>,
      },
    ],
  },
];

export default routes;
