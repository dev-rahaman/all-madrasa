import { Inter } from "next/font/google";
import Footer from "../Sheared/Footer/Footer";
import MainHeader from "../Sheared/Sheard/MainHeader";
import {
  BlogsCategory,
  BlogsSearch,
  BlogsTags,
  ResentBlog,
} from "./BlogsSidebar/BlogsSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "all-madrasa bd ",
  description: "Bangladesh all madrasa here",
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        <div className="m-10 lg:flex justify-center gap-10">
          <div>{children}</div>
          <div className="mt-10 lg:mt-0">
            <BlogsSearch />
            <ResentBlog />
            <BlogsCategory />
            <BlogsTags />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
