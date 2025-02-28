import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/common/Provider";

export const metadata: Metadata = {
  title: "Bite News",
  description:
    "뉴스를 분석하고 핵심만 추출하여 숏폼 영상으로 제공하는 Bite News!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <div className="mx-auto max-w-custom bg-white min-h-svh">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
