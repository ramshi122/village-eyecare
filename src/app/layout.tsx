import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Village Eyecare — Premium Eyewear Store | See Better Than Yesterday",
  description: "Shop premium eyeglasses, sunglasses, contact lenses, computer glasses & more at Village Eyecare, Karnal. Virtual try-on, prescription upload, free delivery & COD available.",
  keywords: ["Village Eyecare", "eyeglasses Karnal", "sunglasses Haryana", "contact lenses", "prescription glasses", "optical store", "virtual try-on"],
  authors: [{ name: "Village Eyecare" }],
  manifest: "/manifest.json",
  applicationName: "Village Eyecare",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Village Eyecare",
  },
  icons: {
    icon: [
      { url: "/icon-192.svg", type: "image/svg+xml" },
      { url: "/icon-512.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon-192.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Village Eyecare — Premium Eyewear Store",
    description: "See Better Than Yesterday. Premium eyeglasses, sunglasses & contact lenses in Karnal.",
    siteName: "Village Eyecare",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Village Eyecare — Premium Eyewear Store",
    description: "See Better Than Yesterday. Premium eyeglasses, sunglasses & contact lenses in Karnal.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-italia-ivory text-italia-ink min-h-screen`}
      >
        {children}
        <Toaster />
        <Sonner position="top-center" />
      </body>
    </html>
  );
}
