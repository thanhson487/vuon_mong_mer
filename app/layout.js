import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-slideshow-image/dist/styles.css';
import '@ant-design/v5-patch-for-react-19';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vườn Mộng Mơ - Nến thơm nghệ thuật",
  description: "Nến thơm nghệ thuật từ những khu vườn đầy cảm hứng. Là món quà ý nghĩa dành tặng cho những người thân yêu của bạn",
  keywords: ["Vườn Mộng Mơ", "nến thơm", "quà tặng", "handmade", ],
  authors: [{ name: "Vườn Mộng Mơ", url: "https://vuonmongmo.vn" }],
   icons: {
    icon: "/image/logo.png", // Đường dẫn đến favicon mới
    shortcut: "/image/logo.png",
    apple: "/image/logo.png", // iOS icon
  },
   images: [
      {
        url: "/image/cover.png",
        width: 800,
        height: 600,
        alt: "Vườn Mộng Mơ",
      },
    ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
