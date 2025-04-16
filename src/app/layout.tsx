import type { Metadata } from "next";

import "./globals.css";



// app/page.tsx (if it's not a client component)
export const metadata:Metadata = {
  title: 'SweetTooth Ke - Delicious cakes, pastries, and desserts in Kenya',
  description: 'SweetTooth Ke brings you the most delightful cakes, pastries, and sweets delivered fresh to your door in Nairobi.',
  openGraph: {
    title: 'SweetTooth Ke - Delicious cakes, pastries, and desserts in Kenya',
    description: 'SweetTooth Ke brings you the most delightful cakes, pastries, and sweets delivered fresh to your door in Nairobi.',
    url: 'https://sweettoothdemo.netlify.app/',
    images: [
      {
        url: 'https://sweettoothdemo.netlify.app/image2.png',
        width: 1200,
        height: 630,
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
