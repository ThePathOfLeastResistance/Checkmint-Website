import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checkmint",
  description:
    "The website for Checkmint, a chrome extensions for helping teachers and students with the problem of AI and plagiarism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Nav />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
