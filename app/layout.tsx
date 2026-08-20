import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Thorsten Gartmann — HCI Researcher",
  description:
    "Portfolio von Thorsten Gartmann — HCI-Forscher und Master-Student an der Universität Siegen. Schnittstelle von Mensch-Computer-Interaktion, KI und Urban Experience Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-canvas text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
