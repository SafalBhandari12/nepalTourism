import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Nepal Tourism - Explore the Himalayas",
  description:
    "Discover the magic of Nepal with our curated tour packages. Experience breathtaking mountains, ancient temples, vibrant culture and unforgettable adventures.",
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
    <html lang='en'>
      <body className={`antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
