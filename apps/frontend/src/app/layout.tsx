// app/layout.tsx
import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import ClientOnly from "@/components/clientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wkt3 | Trading & Gaming Platform",
  description:
    "Multi-language, multi-currency fantasy sports & trading with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientOnly>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
