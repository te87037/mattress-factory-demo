import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "凱麗企業社｜苗栗苑裡床墊工廠",
  description:
    "凱麗企業社自 1970 年於苗栗苑裡製作床墊，服務苗栗、台中，提供全台配送、預約試躺、特殊尺寸與舊床回收安排。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
