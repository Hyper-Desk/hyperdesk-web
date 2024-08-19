import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function SidebarLayout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex flex-grow w-full">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
