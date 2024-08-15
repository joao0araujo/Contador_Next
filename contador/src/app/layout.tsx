import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/app/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <StyledComponentsRegistry>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
