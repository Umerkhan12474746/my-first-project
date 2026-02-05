import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "PharmaCare+ Online Pharmacy",
  description: "Professional online pharmacy with medicines, prescriptions and healthcare products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-pharma-bg text-pharma-dark antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
