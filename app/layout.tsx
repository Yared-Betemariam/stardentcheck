import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stardentplc.cc"),
  title: "Stardent.Check - Stardent Trading's Official Product Check Website",
  openGraph: {
    siteName: "Stardent.Check",
  },
  icons: [
    {
      rel: "icon",
      href: "/logo.png",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden relative")}>{children}</body>
    </html>
  );
}
