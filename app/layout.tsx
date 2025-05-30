import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/extra/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignitus",
  description: "Research and Innovation Incubator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
        <Navbar />
        {children} 
      </ClerkProvider>
        </body>
    </html>
  );
}
