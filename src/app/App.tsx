import { Toaster } from "@/components/ui/toaster";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  const accessToken = localStorage.getItem("accessToken");
  const isLoggedIn = !!accessToken;

  const routing = useRoutes(routes(isLoggedIn));

  return (
    <>
      {routing}
      <Toaster />
    </>
  );
}
