import NavBar from "@/components/navbar/_navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/_footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Du lịch Tây Nguyên - Du lịch Anh Hiếu: Thuê và Cho Thuê xe",
  description:
    "Khám phá vẻ đẹp hoang sơ và đầy mê hoặc của Tây Nguyên cùng Anh Hiếu. Chúng tôi mang đến những trải nghiệm du lịch tận hưởng thiên nhiên hùng vĩ, với những cảnh quan độc đáo và văn hóa đậm đà của người dân địa phương. Hãy cùng chúng tôi khám phá những cánh đồng cỏ rộng lớn, những dãy núi đổ nghiêng, và những bản làng thân thiện trên vùng đất Tây Nguyên. Đặt chân đến Tây Nguyên, trải nghiệm chuyến du lịch ý nghĩa và đầy trải nghiệm cùng Anh Hiếu.",
  authors: {
    url: "https://www.facebook.com/profile.php?id=100006188537389",
    name: "Du lịch Anh Hiếu",
  },
  keywords:
    "dulich, dulich, anhhieu, Anh Hiếu, Du lịch Anh Hiếu, Tây Nguyên, Du lịch Tây Nguyên, xe du lịch, thuê xe du lịch, cho thuê xe, đặt xe, cho thuê xe du lịch, dịch vụ xe du lịch, dịch vụ thuê xe, dịch vụ cho thuê xe, xe du lich, dịch vụ cho thuê xe du lịch, thuê xe dịch vụ",
  creator: "Tiến Đạt",
  publisher: "Tiến Đạt",
  robots: "index, follow",
  alternates: {
    canonical: "https://dulichanhhieu.vn",
  },
  category: "Traveling",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      {" "}
      <Script
        id="gga-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VJ36D1RJYV`}
      />
      <Script id="gga-2" strategy="lazyOnload">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VJ36D1RJYV', {
                page_path: window.location.pathname,
                });
            `}
      </Script>
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
