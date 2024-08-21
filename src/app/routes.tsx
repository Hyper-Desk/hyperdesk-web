import Computing from "@/pages/computing/Computing";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Profile from "@/pages/profile/Profile";
import SignUp from "@/pages/sign-up/SignUp";
import MainLayout from "@/widgets/main-layout/MainLayout";
import SidebarLayout from "@/widgets/sidebar-layout/SidebarLayout";
import { Link, Navigate } from "react-router-dom";

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
        element: (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-5xl font-bold text-primary">
              서비스 준비중입니다.
            </h1>
          </div>
        ),
      },
      {
        path: "firewall",
        element: (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-5xl font-bold text-primary">
              서비스 준비중입니다.
            </h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
        <h1 className="text-5xl font-bold text-primary">404 Not Found</h1>
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:underline"
        >
          홈으로 돌아가기
        </Link>
      </div>
    ),
  },
];

export default routes;
