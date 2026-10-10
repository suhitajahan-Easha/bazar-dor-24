
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Marquee from "@/Components/Marquee";
import Footer from "@/Components/Footer";
import { ToastContainer, toast } from 'react-toastify';

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "BazarDor",
  description: "বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="bn" data-theme="light" className={`${NotoSerifBengali.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <Navbar />
        <Marquee />
        <main className="flex-1 bg-[#F3FBF4]">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
