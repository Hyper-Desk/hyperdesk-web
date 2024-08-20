import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function SidebarLayout() {
  return (
    <div className="w-full h-full flex flex-col font-inter">
      <Header />
      <main className="flex flex-grow w-full">
        <Sidebar />
        <div className="flex flex-col w-full relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-y-auto p-10">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
