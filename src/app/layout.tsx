import { Navbar } from "@/components/ui/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SIKOLA BUATAN TASKIT",
  description: "For educational only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={cn(
        "max-w-7xl",
        "mx-auto",
        "antialiased",
        poppins.className,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <Navbar />
          <SidebarProvider>
            <main className="mx-12">{children}</main>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
