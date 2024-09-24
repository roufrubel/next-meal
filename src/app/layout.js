// import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {Roboto} from 'next/font/google'

const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin'] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Next Meal Next Js Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={roboto.className}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
