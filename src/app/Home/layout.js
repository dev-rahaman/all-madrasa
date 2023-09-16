import { Inter } from "next/font/google";
import Footer from "../Sheared/Footer/Footer";
import MainHeader from "../Sheared/Sheard/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-madrasa bd ",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
