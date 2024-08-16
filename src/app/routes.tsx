import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/sign-up/SignUp";
import MainLayout from "@/widgets/main-layout/MainLayout";
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
        element: isLoggedIn ? <Navigate to="/" /> : <Login />,
      },
      {
        path: "signup",
        element: isLoggedIn ? <Navigate to="/" /> : <SignUp />,
      },
    ],
  },
  {
    path: "/app",
    element: isLoggedIn ? <div>console</div> : <Navigate to="/login" />,
  },
];

export default routes;
