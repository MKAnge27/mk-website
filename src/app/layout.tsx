import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Michel Kanga",
    description: "I like to build things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`max-w-5xl mx-auto flex flex-col`}>
        <Navbar city="Cincinati"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
