import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
// next.js의 마법 : 자동으로 googleFont에서 가져옴 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display:"swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400","500","700"],
  display:"swap",
});

export const metadata: Metadata = {
  title: "INTERVOGUE International DX | 패션 DX 컨설팅",
  description: "한국에서 일본으로, 전략에서 실행까지. AI 앙상블 방법론과 30년 패션 경험을 바탕으로 브랜드의 일본 진출을 지원합니다.",
  keywords:["패션 컨설팅", "일본 진출", "DX", "자사몰", "패션AI", "브랜드 전략", "INTERVOGUE","인터보그","김강화"],
  authors: [{name: "INTERVOGUE International DX"}],
  openGraph:{
    title:"INTERVOGUE International DX",
    description: "한국에서 일본으로, 전략에서 실행까지",
    type:"website",
    locale:"ko_KR"
  },
};

export default function RootLayout({
  children,//props받기 
}: Readonly<{ //읽기 전용이야 
  children: React.ReactNode; //컴포넌트, 텍스트 등 
}>) {
  return ( //JSX반환 
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansKr.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
