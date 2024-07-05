import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import AuthSession from "@/components/AuthSession";
import AxiosInterceptor from "./apis/AxiosInterceptor";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HYPERDESK",
  description: "Virtual Cloud Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <AuthSession>
          <AxiosInterceptor>{children}</AxiosInterceptor>
        </AuthSession>
      </body>
    </html>
  );
}
