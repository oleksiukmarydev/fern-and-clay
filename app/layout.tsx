import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fern & Clay | Stoke Newington plant shop",
  description:
    "Fern & Clay is a fictional neighbourhood plant shop and working greenhouse in Stoke Newington, London.",
  metadataBase: new URL("https://fern-and-clay-greenhouse.copperbagel1.chatgpt.site"),
  openGraph: {
    title: "Fern & Clay",
    description: "Plants, practical care and small workshops under an old London glasshouse roof.",
    images: [{ url: "/images/greenhouse-hero.jpg", width: 1672, height: 941 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
