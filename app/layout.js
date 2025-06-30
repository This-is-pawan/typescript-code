import "./globals.css";
import Navbar from "../Components/Navbar/page.tsx";
// import type { Metadata } from "next";
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"] });
// export const Metadata:Metadata={
// title:'Next.js project',
// description:'',
// keywords:'',
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
        data-new-gr-c-s-check-loaded="14.1241.0"
        data-gr-ext-installed=""
      >
        <Navbar />
        {/* main is the all pages of navbar */}
        <main className="max-w-3xl max-auto px-10">{children}</main>
      </body>
    </html>
  );
}
