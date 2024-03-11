import type { Metadata } from "next";

import Theme from "./components/Theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.scss";
export const metadata: Metadata = {
  title: "Web Olympus - Digital Agency Solution",
  description: "Digital Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
