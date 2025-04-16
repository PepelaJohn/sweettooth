import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";



export const metadata: Metadata = {
  title: "Sweet Tooth Ke",
  description: "Home for all things sweet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <title>SweetTooth Ke </title>
        <meta property="og:title" content="SweetTooth Ke" />
        <meta property="og:description" content="Home for all things sweet" />
        <meta property="og:image" content="https://sweettoothdemo.netlify.app/image.png" />
        <meta property="og:url" content="https://sweettoothdemo.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
