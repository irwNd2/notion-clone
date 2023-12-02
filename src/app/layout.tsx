import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/lib/providers/theme";
// import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

// const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamDocs",
  description: "Place where you collaborate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background font-sans")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
