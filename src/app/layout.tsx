import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToastProvider";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
// axios.defaults.withCredentials = true;
export const metadata: Metadata = {
  title: "Nutriast",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><ToasterProvider />{children}</body>
    </html>
  );
}
