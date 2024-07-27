import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/mainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Api Quest",
  description: "Api Quest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen h-[calc(100vh-72px)] bg-slate-200">
          <MainNavbar/>
          <div className="w-full max-w-[1440px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
