import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "BookMark",
  description: "Challenge from Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body className={`${rubik.className} overflow-x-hidden z-0`}>
        {children}
      </body>
    </html>
  );
}
