import { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const proximaNovaAltFont = localFont({
  variable: "--font-proxima-nova-a",
  src: [
    {
      path: "../public/fonts/ProximaNovaA-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-ThinIt.woff",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-LightIt.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-RegularIt.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-SemiboldIt.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-BoldIt.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Extrabld.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-ExtrabldIt.woff",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/ProximaNovaA-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/ProximaNovaA-BlackIt.woff",
      weight: "900",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: '%s | +60 Datos plateados',
    default: '+60 Datos plateados'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${proximaNovaAltFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
