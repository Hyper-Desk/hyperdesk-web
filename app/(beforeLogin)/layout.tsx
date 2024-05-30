import Header from "@/components/layout/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}
export default function Layout({ children, modal }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      {modal}
    </div>
  );
}
