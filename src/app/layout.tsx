import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";
import ClientProvider from "@/components/client-provider";

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
        <ClientProvider>
          <main className="min-h-screen h-[calc(100vh-72px)] bg-[#021526]">
            <MainNavbar />
            <div className="w-full max-w-[1200px] mx-auto">{children}</div>
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
