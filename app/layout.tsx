import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${proximaNovaAltFont.variable}`}>
      <Script
        id="show-accesibility-widget"
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Accessibility Code for "www.mas60datosplateados.com" -->
          /*

          Want to customize your button? visit our documentation page:

          https://login.equalweb.com/custom-button.taf

          */
          window.interdeal = {
              "sitekey": "427badf766cb21a4adc344eba97ee8cb",
              "Position": "left",
              "domains": {
                  "js": "https://cdn.equalweb.com/",
                  "acc": "https://access.equalweb.com/"
              },
              "Menulang": "es-MX",
              "draggable": false,
              "btnStyle": {
                  "vPosition": [
                      "50%",
                      "20%"
                  ],
                  "scale": [
                      "0.5",
                      "0.5"
                  ],
                  "color": {
                      "main": "#1d5556",
                      "second": "#ffffff"
                  },
                  "icon": {
                      "type": 11,
                      "shape": "circle"
                  }
              }
          };
          (function(doc, head, body){
              var coreCall             = doc.createElement('script');
              coreCall.src             = interdeal.domains.js + 'core/4.6.14/accessibility.js';
              coreCall.defer           = true;
              coreCall.integrity       = 'sha512-DeZBWLOEHK1CkmU3vQTNSXeENfZmhTHFmn7zzhvZCPERahpp/DTouMc1ZHOu+RAo1FTKnuKEf1NQyB76z8mU1Q==';
              coreCall.crossOrigin     = 'anonymous';
              coreCall.setAttribute('data-cfasync', true );
              body? body.appendChild(coreCall) : head.appendChild(coreCall);
          })(document, document.head, document.body);
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
