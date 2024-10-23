import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppKit } from "../context/web3modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MyWallet",
  description: "null",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppKit>{children}</AppKit>
      </body>
    </html>
  );
}

// export default function ConnectButton() {
//   return <w3m-button />;
// }
