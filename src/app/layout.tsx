import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
//import { Sidebar } from "@/components/sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="light">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
        )}
      >
        <main>
          {/* <Sidebar />*/}
          {children}
        </main>
      </body>
    </html>
  );
}
