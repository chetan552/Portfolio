import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://chetanchad.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chetan Chadalavada — Software Engineer & Enterprise Portal Architect",
    template: "%s · Chetan Chadalavada",
  },
  description:
    "Enterprise Portal Solution Architect at Xtivia with 20 years of experience building Java/Spring/Liferay platforms — and a growing catalog of Next.js side projects.",
  keywords: [
    "Chetan Chadalavada",
    "Software Engineer",
    "Enterprise Portal Architect",
    "Liferay",
    "Spring Boot",
    "Next.js",
    "Java",
    "TypeScript",
    "Xtivia",
  ],
  authors: [{ name: "Chetan Chadalavada", url: "https://github.com/chetan552" }],
  creator: "Chetan Chadalavada",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Chetan Chadalavada",
    title: "Chetan Chadalavada — Software Engineer & Enterprise Portal Architect",
    description:
      "Two decades of building enterprise platforms (Java, Spring, Liferay) and modern full-stack products (Next.js, Prisma, AI).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chetan Chadalavada — Software Engineer & Enterprise Portal Architect",
    description:
      "Two decades of building enterprise platforms and modern full-stack products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
