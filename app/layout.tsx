import type { Metadata } from "next";
import { Be_Vietnam_Pro, Phudu, Manrope, Epilogue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import VietnameseOnlyPopup from "@/components/VietnameseOnlyPopup";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
});

const phudu = Phudu({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-phudu",
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const epilogue = Epilogue({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-epilogue",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
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
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0,0" />
      </head>
      <body className={`${beVietnamPro.variable} ${phudu.variable} ${manrope.variable} ${epilogue.variable} ${spaceGrotesk.variable}`}>
        {children}
        {/* <VietnameseOnlyPopup /> */}
      </body>
    </html>
  );
}
