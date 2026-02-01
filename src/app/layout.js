import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Portfolio de un ML Engineer",
  description: "Un portfolio personal y blog técnico sobre Machine Learning, IA y datos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-electric-blue focus:text-white focus:font-bold focus:rounded-lg focus:shadow-2xl focus:ring-4 focus:ring-teal/50 transition-all"
        >
          Skip to content
        </a>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-grow container mx-auto px-4 pt-24 pb-8 scroll-mt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
