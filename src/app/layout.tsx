import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://99knit.com"),
  title: "99Knit - Coming Soon",
  description:
    "Subscribe to the 99Knit newsletter and get notified at launch.",
  openGraph: {
    title: "99Knit - Coming Soon",
    description:
      "Subscribe to the 99Knit newsletter and get notified at launch.",
    url: "https://99knit.com",
    siteName: "99Knit",
    images: [
      {
        url: "/images/poster.png",
        width: 1200,
        height: 630,
        alt: "99Knit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "99Knit - Coming Soon",
    description:
      "Subscribe to the 99Knit newsletter and get notified at launch.",
    images: ["/images/poster.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/images/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/images/apple-touch-icon.png",
    shortcut: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
