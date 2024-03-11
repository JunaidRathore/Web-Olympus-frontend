import type { Metadata } from "next";
import "./globals.scss";
import Theme from "./components/Theme";
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
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
