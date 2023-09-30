import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "POPYEG",
//   description: "Blog web app by Daisuke Sato",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "hsl(0, 0%, 98%)" }}
      >
        {children}
      </body>
    </html>
  );
}
