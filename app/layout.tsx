import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "凱麗企業社｜苗栗苑裡床墊工廠",
  description:
    "凱麗企業社由家族經營，家族自 1970 年開始製作床墊，於苗栗苑裡自家工廠製作，服務一般家庭、家具行與批發代工，提供台灣本島配送、免費舊床回收與預約試躺。",
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
