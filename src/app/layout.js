import Footer from "./Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Sheard/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-doctors bd ",
  description: "Bangladesh all doctors here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
