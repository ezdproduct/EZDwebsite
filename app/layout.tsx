import type { Metadata } from "next";
import { Outfit, Phudu } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const phudu = Phudu({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-phudu",
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
      <body className={`${outfit.variable} ${phudu.variable}`}>
        {children}
      </body>
    </html>
  );
}
