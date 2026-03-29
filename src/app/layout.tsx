import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "André Araújo Real Estate",
  description: "Consultoria imobiliária de excelência em Vila Nova de Famalicão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed-dim selection:text-primary-container">
        {children}
      </body>
    </html>
  );
}
