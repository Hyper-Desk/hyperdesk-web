import { Outlet } from "react-router-dom";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function MainLayout() {
  return (
    <div className="w-full h-full flex flex-col font-inter">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
