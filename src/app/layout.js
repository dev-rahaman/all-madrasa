import Footer from "./Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Sheard/MainHeader";
import AuthProvider from "@/Provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-madrasa bd ",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
