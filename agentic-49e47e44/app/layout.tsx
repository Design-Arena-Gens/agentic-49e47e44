import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mémoire – Système de suivi solaire bi-axial piloté par Arduino | INSER",
  description:
    "Étude complète de conception, modélisation et déploiement d’un suivi solaire automatique bi-axial, architecture Arduino, analyse énergétique et recommandations.",
  keywords: [
    "suivi solaire",
    "tracker bi-axial",
    "Arduino",
    "photovoltaïque",
    "contrôle temps réel",
  ],
  authors: [{ name: "Ing. Lina Dupont" }],
  creator: "Ing. Lina Dupont",
  publisher: "Institut National des Sciences de l'Énergie Renouvelable",
  metadataBase: new URL("https://agentic-49e47e44.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
