import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeLong Plumbing | Azusa, CA | 626-833-9514",
  description:
    "DeLong Plumbing - Professional plumbing services in Azusa, California. Drain rooter, hydro-jetting, water heaters, and all plumbing services. Call 626-833-9514.",
  keywords:
    "plumber Azusa CA, drain rooter, hydro-jetting, water heater repair, emergency plumber, DeLong Plumbing, plumbing services San Gabriel Valley",
  openGraph: {
    title: "DeLong Plumbing | Azusa, CA",
    description:
      "Professional plumbing services in Azusa, CA. Drain rooter, hydro-jetting, water heaters & more. Call 626-833-9514.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
