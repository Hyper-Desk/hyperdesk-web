import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import SignUp from "@/pages/sign-up/SignUp";
import MainLayout from "@/widgets/main-layout/MainLayout";
import { Navigate } from "react-router-dom";

const routes = (isLoggedIn: boolean) => [
  {
    path: "/",
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app" />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
