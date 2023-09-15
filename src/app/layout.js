import AuthProvider from "@/Provider/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import MainHeader from "./Sheared/Sheard/MainHeader";
import Footer from "./Sheared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-madrasa bd ",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <MainHeader /> */}
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
