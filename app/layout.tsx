import type { Metadata } from "next";
import { Noto_Sans_JP, Bebas_Neue, DM_Mono } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Product Camp｜プログラミングを一切学ばずに、Webアプリを開発する2日間",
  description:
    "コードは書かない。書くのは設計図だけ。2日間の集中講座で、あなたが設計したWebアプリをインターネットに公開。月額サポートコミュニティで改善・収益化まで伴走します。",
  openGraph: {
    title:
      "Product Camp｜プログラミングを一切学ばずに、Webアプリを開発する2日間",
    description:
      "コードは書かない。書くのは設計図だけ。2日間の集中講座で、あなたが設計したWebアプリをインターネットに公開。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${bebasNeue.variable} ${dmMono.variable} antialiased bg-slate-100`}>
        <div className="mx-auto min-h-screen w-full max-w-[540px] shadow-2xl bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
