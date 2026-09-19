import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SIKOLA BUATAN TASKIT",
  description: "For educational only",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${poppins.className} max-w-7xl mx-auto antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
