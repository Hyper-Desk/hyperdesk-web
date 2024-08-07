import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
