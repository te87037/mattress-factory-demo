import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "厚眠床墊工廠｜工廠直營床墊",
  description: "床墊工廠直營官網 Demo：材料說清楚、價格公開、尺寸可客製。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
