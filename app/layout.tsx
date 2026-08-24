import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XII-H || MANSA",
  description: "Digital yearbook XII-H MANSA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
