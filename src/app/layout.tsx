import type { Metadata } from "next";

import "./globals.css";



// app/page.tsx (if it's not a client component)
export const metadata:Metadata = {
  title: 'SweetTooth Ke',
  description: 'Home for all things sweet',
  openGraph: {
    title: 'SweetTooth Ke',
    description: 'Home for all things sweet',
    url: 'https://sweettoothdemo.netlify.app/',
    images: [
      {
        url: 'https://sweettoothdemo.netlify.app/image.png',
        width: 800,
        height: 600,
        alt: 'Sweet Tooth landing page',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
