import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ezd - Tương lai của sáng tạo",
  description: "Khám phá nền tảng sáng tạo thế hệ mới với Next.js và AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
