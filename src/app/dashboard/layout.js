import { Inter } from "next/font/google";
import DashboardHeader from "./DashboardComponents/DashboardHeader";
import Sidebar from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | All Madrasa",
  description: "Bangladesh all madrasa here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardHeader />
        <Sidebar />
        <div className="mt-24 ms-96 w-[900px]"> {children}</div>
      </body>
    </html>
  );
}
