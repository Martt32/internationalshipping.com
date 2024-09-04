import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Layout.js";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "International Shippings",
  description: "Ship and track your cargo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/large.png'/>
      </head>
      <body>
      <Navbar>
        {children}
      </Navbar>
        </body>
    </html>
  );
}
